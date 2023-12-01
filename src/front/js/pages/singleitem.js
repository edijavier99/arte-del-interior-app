import React,{useState,useEffect} from "react";
import "../../styles/mainproducts.css"
import Carrito from "../component/carrito";
import ShareComponent from "../component/sharecomponent";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Button } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';



const SingleItem = (props) =>{
    const [selectedMeaning, setSelectedMeaning] = useState(null);
    const params = useParams()
    const [cantidad,setCantidad] = useState(0)
    const [item,setItem] = useState({}) 
    const [showCart, setShowCart] = useState(false);
    const {store,actions} = useContext(Context)
    const userID = localStorage.getItem('userId')
    // Datos de los nombres y sus significados

const generateNamesAndMeanings = () => {
  return [
    { name: 'Description', meaning: item.description || 'No description available' },
    { name: 'Información adicional', meaning: 'Hello means hola in English.' },
    { name: 'Opiniones', meaning: 'Kaixo significa hola en euskera.' },
  ];
};
  // Función para manejar el clic en un nombre
  const handleNameClick = (meaning) => {
    setSelectedMeaning(meaning);
  };

    const sumarCantidad = () =>{
        setCantidad(cantidad + 1)
    }
    const restarCantidad = () =>{
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
          }
    }

    const get_single_item = () =>{
        fetch(process.env.BACKEND_URL + 'api/single-item/' + params.id, { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((result) => {  
            console.log(result);
            setItem(result)
        })
        .catch((err) => {
        console.log(err);
        })
        
    }

    useEffect(()=>{
        get_single_item()
    },[])


    return(
        <div className="container-fluid mt-5 ">
        <div className="row mt-5 mx-2">
            <div className="col-md-8" id="imageMainproduct">
                <img  src={item.image} alt=""/>
            </div>
            <div className="col-md-4">
                <div className="productInfo ">
                    <h2 className="py-5">{item.title}</h2>
                    <p className="text-left">{item.shortDescription}</p>
                    <p className="mt-4"><i class="fa-solid fa-car me-3"></i>Entrega a domicilio</p>
                    <p><i class="fa-solid fa-arrow-left me-3"></i> 30 dias para devolución</p>
                    <p><i class="fa-solid fa-lock me-3"></i> 1 año de garantía</p>

            <section className="cantidadAndPrecio">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div>
                        <InputGroup className="mb-3">
                        <Button variant="outline-secondary" onClick={restarCantidad}>
                            -
                        </Button>
                        <FormControl
                            aria-label="Cantidad"
                            aria-describedby="basic-addon2"
                            value={cantidad}
                        />
                        <Button variant="outline-secondary" onClick={sumarCantidad}>
                            +
                        </Button>
                        </InputGroup>
                    </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div>
                        <p> € <span style={{fontSize:45}}>{item.price}</span><sup class="price__suffix">,00</sup></p>
                    </div>
                    </div>
                </div>
                </section>
                    <button id="carrito" className="my-3" onClick={() =>{ 
                        actions.añadirAlCarrito(item.id, item.title, item.price, item.image)
                        actions.añadirCarritoAlUsuario(userID)
                    }}>Añadir al carrito</button>
                    <button  id="comprar" className="bg-light">Comprar</button>
                </div>    
            </div>
        </div>
            <Row id="descriptionProducto">
                <Col md={4} className="d-flex justify-content-center align-items-center flex-column">
                    {generateNamesAndMeanings().map((item) => (
                        <Button className="btn btn-light my-2 btnDescription" key={item.name} onClick={() => handleNameClick(item.meaning)}>
                        {item.name}
                        </Button>
                    ))}
                </Col>
                <Col md={8}>
                    <div>
                    {selectedMeaning ? (
                        <p>{selectedMeaning}</p>
                    ) : (
                        <p>Selecciona un nombre para ver su significado.</p>
                    )}
                    </div>
                </Col>
            </Row>
    </div>
    )
}

export default SingleItem