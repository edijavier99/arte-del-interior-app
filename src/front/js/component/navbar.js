import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import {GiHamburgerMenu } from 'react-icons/gi';
import Dropdown from "./dropdown";
import Swal from 'sweetalert2';
import { Context } from "../store/appContext";
import { FaCartShopping } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';



export const Navbar = () => {

	const [searchQuery, setSearchQuery] = useState('');
	const tokenn = localStorage.getItem("token")
	const {store,actions} = useContext(Context)
	const [searchResults, setSearchResults] = useState([]);
	const navigate = useNavigate()
	const isHome = window.location.pathname === '/';
	const userData = JSON.parse(localStorage.getItem('userData'));



	const handleSearch = (e) => {
	  e.preventDefault();
	  realizarBusqueda(searchQuery);
	};

	useEffect(()=>{
        actions.getUserCarrito(localStorage.getItem("userId"))
    },[])

	const logOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId')
		localStorage.removeItem('username')
		localStorage.removeItem("image")
		localStorage.removeItem("gmail")

		if(userData){
			localStorage.removeItem('userData')

		}
		window.location.reload();
		Swal.fire({
		icon: 'success',
		text: 'You are now logged out'         
    	})
	}

	const realizarBusqueda = async (query) => {
		try {
			fetch(`${process.env.BACKEND_URL}/api/search?query=${query}`, { 
                method: "GET", 
                headers: { 
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((result) => {  
				setSearchResults(result.results)
                console.log(result.results);
            })
	  		} catch (error) {
		  console.error('Error al realizar la búsqueda:', error);
		}
	  };

	return (
		<nav className={`navbar navbar-expand-lg ${isHome ? 'navbar' : 'otherNav'}`} >
			<div className="container-fluid  mt-0" id="navbarHome">
				<a className="navbar-brand" href="#">Navbar</a>
				<span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" >
						<GiHamburgerMenu className="reactIcon" size="30px" />
					</span>
				</span>
				<a className="nav-item" onClick={()=> navigate("/userpage")}><BsFillPersonFill size={25} /></a>
				<FaCartShopping size={25} />
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" onClick={()=> navigate("/")} >Home</a>
					</li>
					{tokenn || (userData && userData.token) ? (
						<>
						<li className="nav-item">
							<a className="nav-link" href="/" onClick={logOut}>Log out</a>
						</li>
                            <button type="button" className="btn border-0 p-0 m-0" onClick={()=>navigate("/carrito")}>
                            	Carrito <span>{(store.carrito && store.carrito!=null && store.carrito!=undefined)? store.carrito.length:"0"}</span>
                            </button>
						</>
					):(
						<>
						<li className="nav-item">
							<a className="nav-link" href="/login">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/login">Mi cesta</a>
						</li>
						</>
					)}
					
					<Dropdown name ={"Dormitorio"} item1="Canapes"  link="/canapes" link2="/colchones" link3="/cabeceros" item2="Colchones" item3="Cabezeros" />
					<Dropdown name ={"Salon"} item1="Sofa" item2="Armario" item3="Mesas"  link="/sofas" link2="/armarios" link3="/mesas" />
				</ul>
					<form className="d-flex" onSubmit={handleSearch}>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Buscar"
							aria-label="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button className="btn btn-outline-success" type="submit">
							Buscar
						</button>
					</form>
			
				</div>
				{searchResults.length > 0 && (
        <div className="d-flex bg-danger">
          {searchResults.map((result, index) => {
				return (
					<div id="mostrarBusqueda" className="d-flex flex-column">
						<li key={index}>
							<a className="dropdown-item" href="#">
								{result.name}
							</a>
						</li>
					</div>
				);
				})}
        </div>
      )}
			</div>
		</nav>
	);
};
