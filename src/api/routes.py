"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Item
from api.utils import generate_sitemap, APIException
import bcrypt
import stripe
import os 
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token
)


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/create-user', methods=['POST'])
def create_user():
    data = request.get_json()
    if data is None:
        response_body = {
            "msg" : "Body should be passed with request"
        }
        return jsonify(response_body),400
    
    required_fields = ["name", "surname", "email", "password"]
    for field in required_fields:
        if field not in data:
            response_body = {
                "msg": f"{field.capitalize()} should be in request"
            }
            return jsonify(response_body), 400
        
    password_hash = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())
    password_hex = password_hash.hex()
    new_user= User(email = data["email"], name=data["name"], surname=data["surname"], password=password_hex ,location=data["location"], image=data["image"])
    db.session.add(new_user)   
    db.session.commit()
    return jsonify({"msg": "user has been added"}),200


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("loginEmail", None)
    password = data.get("loginPassword", None)

    if email is None or password is None:
        response_body = {
            "msg": "Email and password are required"
        }
        return jsonify(response_body), 400

    user = User.query.filter_by(email=email).first()
    if user is None:
        response_body = {
            "msg": "User not found"
        }
        return jsonify(response_body), 404

    stored_password_hex = user.password 
    stored_password_bytes = bytes.fromhex(stored_password_hex)

    if bcrypt.checkpw(password.encode('utf-8'), stored_password_bytes):
        logged = "Successfully logged"
        access_token = create_access_token(identity=user.id)

        return jsonify({"loginOK": logged, "token": access_token, "user_id": user.id, "username": user.name, "email": user.email}),200
    else:
        response_body = {
            "msg": "Invalid password"
        }
        return jsonify(response_body), 400

@api.route('/upload-item', methods=['POST'])
def upload_item():
    data = request.get_json()
    if data is None:
        response_body = {
            "msg" : "Body should be passed with request"
        }
        return jsonify(response_body),400
    
    required_fields = ["title", "description", "publishing_date", "image", "category", "price","color"]
    for field in required_fields:
        if field not in data:
            response_body = {
                "msg": f"{field.capitalize()} should be in request"
            }
            return jsonify(response_body), 400
        
    new_item= Item(title = data["title"], description=data["description"], price=data["price"], category=data["category"], color=data["color"], publishing_date=data["publishing_date"], image=data["image"], altura=data["altura"], profundidad=data["profundidad"],longitud=data["longitud"],codigo=data["codigo"])
    db.session.add(new_item)   
    db.session.commit()
    return jsonify({"msg": "Item has been added"}),200


@api.route('/payment-stripe', methods=['POST'])
def get_stripe_details():
    stripe.api_key = os.environ.get("STRIPE_API_KEY")

    try:
        data = request.get_json()
        amount = data["amount"]*100

        charge = stripe.Charge.create(
            amount=amount,
            currency='usd',
            source='tok_visa', 
            description='Ejemplo de cargo',
        )
        return jsonify(charge),200

    except stripe.error.CardError as e:
        return jsonify({"error": str(e)}), 400 
    

@api.route('/single-item/<int:id>',methods=['GET'])
def get_single_item(id):
    item = Item.query.get(id)
    return jsonify(item.serialize()),200

@api.route('/items', methods=['GET'])
def get_all_items():
    category = request.args.get("category")
    all_items = Item.query.filter_by(category=category)
    all_items = list(map(lambda x: x.serialize(), all_items))

    return jsonify(all_items), 200


@api.route('user/<int:id>',methods=['PUT'])
def update_user(id):
    data = request.get_json()

    if data is None:
        response_body={
            "msg":"body should be passed with request parameters"
        }
        return jsonify(response_body),400
    
    update_user= User.query.get(id)
    
    if "email" in data:
        update_user.email = data["email"]
    if "password" in data:
        update_user.password = data["password"]
    if "carrito" in data:
        update_user.carrito = [str(item) for item in data["carrito"]]
    db.session.commit()

    return jsonify({"msg":"user updated"}),200


@api.route('/user/<int:id>',methods=["GET"])
def get_single_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize()), 200


@api.route('/search',methods=["GET"])
def handle_search():
    search_query = request.args.get('query') 
    results = Item.query.filter(Item.title.like(f'%{search_query}%')).all()

    serialized_results = [{'id': item.id, 'name': item.title} for item in results]

    return jsonify({'results': serialized_results})
