import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			usuarioCreado: false,
			usuarioLogeado: false,
			carrito: [],
		},
		actions: {
			añadirAlCarrito: (itemId, itemTitle, itemPrice, itemImage) =>{
				const store = getStore();
				if (!store.carrito.some(producto => producto.id == itemId) && store.carrito !== null) {
					const updatedCarrito = [...store.carrito, { id: itemId, title: itemTitle, price: itemPrice, image: itemImage }];
                    setStore({ carrito: updatedCarrito });
				} else {
					Swal.fire("Ya existe en el carrito!!")
				}	
			},
			añadirCarritoAlUsuario: (id) => {
				const store = getStore()
				const actions=getActions()
				// const token = localStorage.getItem('jwt-token');

				fetch(process.env.BACKEND_URL + 'api/user/' + id ,{
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
						// "Authorization" : "Bearer " + token
					},
					body : JSON.stringify({ carrito: store.carrito })
				})
				.then(resp => {								
					return resp.json();
				})
				.then(data => {            
				})
				.catch(error => {			
					console.log('Oops something went wrong'+ error);
				})
			},
			sacarIdLoginGoogle: ()=>{
				
			},
			getUserCarrito: (id) => {
				// const token = localStorage.getItem('jwt-token');
				// if(token) {
				fetch(process.env.BACKEND_URL + 'api/user/' + id ,{
					method: 'GET',
					  headers: {
						"Content-Type": "application/json",
					},
				})
				 .then(resp => {								
					return resp.json();
				})
				.then(data=> {
					const store = getStore()
					const jsonCarrito = data.carrito.map(item => {
						const validString = item.replace(/'/g, '"')
						console.log(validString);

						return JSON.parse(validString)
					})
					setStore({ ...store, carrito:jsonCarrito });
				})
				.catch(error => {			
					console.log('Oops something went wrong'+ error);
				})
			// }
			},
			createUser: (name,password,surname,email,location,image) =>{
					if(email === '') {
						alert(' Email is empty!')
					} else if(password === ''){
						alert('Password is empty!')
					} else if ( name === " "){
						alert("Name is empty")
					} else if ( surname === " "){
						alert("Surname is empty")
					}else if ( location === " "){
						alert("Location is empty")
					} else {
						fetch(process.env.BACKEND_URL + 'api/create-user', { 
						method: "POST", 
						headers: { 
							"Content-Type": "application/json",
						},
						body: JSON.stringify({name,password,surname,email: email.toLowerCase(),location,image}) 
					})
					.then((res) => res.json())
					.then((result) => {  
						if(result.err){
							Swal.fire(result.err)
						}
						else{
							setStore({ usuarioCreado: true });
							
							console.log("usuariocreadooooo");
							console.log(result);
						}
					})
					.catch((err) => {
					console.log(err);
					})
				}
			},
			userLogin: (loginEmail,loginPassword) =>{
				if(loginEmail ==='') {
					alert(' Email is Empty!')
				} else if(loginPassword === ''){
					alert('Password is empty!')
				} else {
					fetch( process.env.BACKEND_URL + `api/login`, { 
					method: "POST",
					headers: { 
						"Content-Type": "application/json",
					},
					body: JSON.stringify({loginEmail: loginEmail.toLowerCase(),loginPassword }) 
				})
				.then((res) => res.json())
				.then((result) => {
					if(result.msg){
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: result.msg,
						});
					}else{
						setStore({ usuarioLogeado: true });
						Swal.fire({
							icon: 'success',
							text: result.loginOK,
						});
						localStorage.setItem('token', result.token)
						localStorage.setItem('userId', result.user_id);
						localStorage.setItem('username', result.username);
						localStorage.setItem('gmail', result.email);
						localStorage.setItem('image', result.image);
					}
					})
					.catch((err) => {
						console.log(err);
					});
				};
			}

		}

	};
};

export default getState;
