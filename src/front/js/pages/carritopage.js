import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Carrito from "../component/carrito";
import "../../styles/carritopage.css"
import { useNavigate } from "react-router-dom";


const CarritoPage = () =>{
    const {store,actions} = useContext(Context)
    const items = store.carrito
    const navigate = useNavigate()
    return(
        <>
                  {/* <div className="col-md-8">
            <ul class="progress-bar d-flex flex-row  justify-content-between ">
        <li class="step">
            <div class="circle activo">1</div>
            <div>Cesta</div>
        </li>
        <li class="step">
            <div class="circle">2</div>
            <div>Información</div>
        </li>
        <li class="step">
            <div class="circle">3</div>
            <div>Pago</div>
        </li>
    </ul>
            </div> */}
        <div className="container-fluid d-flex flex-row col-md-11 mt-3" id="carritoDashboard">
            <section className="col-md-8 me-4" id="listaProductos">
                <h3>CESTA {store.carrito.length} PRODUCTOS</h3>
                <p>Envío gratis disponible</p>
                <div>
                    {actions.showCarrrito(items)}
                </div>
            </section>

            <section className='col-md-4'>
                <div>
                    <h3 className="tituloResumenPedido">RESUMEN DEL <strong>PEDIDO</strong></h3>
                </div>
                <div className="bg-light" id="resumenPedido">
                    {actions.showEachPedido(items)}
                    <hr/>
                    <div className="d-flex flex-row justify-content-between">
                        <p>Gastos de envio</p>
                        <p>Gratis</p>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row justify-content-between">
                        <p><strong>Total</strong></p>
                        <p> <strong>{actions.sumarTotalPrecio(items)} €</strong></p>
                    </div>
                    <span id="infoPago">Tiene derecho a cancelar su pedido dentro de un período de 14 días a partir de la recepción de los muebles.
                            Para ejercer este derecho, debe notificarnos su decisión por escrito a través del correo electrónico para los pedidos de productos digitales.
                            Los gastos de envío y devolución correrán por cuenta del cliente, excluyendo los gastos de envío estándar, en caso de devolución de los productos.
                            Los productos deben devolverse en su embalaje original y en buen estado. Se requerirá que los artículos devueltos no presenten signos de daños significativos.  
                            Le recomiendo que se ponga en contacto con nuestro equipo de servicio al cliente si necesita más información o tiene alguna pregunta adicional sobre nuestros
                            términos y condiciones. <a href="#">Para más información</a>
                    </span>
                    <button className="btn btn-primary mt-3 col-md-12" onClick={()=>{
                        navigate("/payment")
                    }}>CONTINUAR</button>
                    <button className="btn btn-primary mt-3 col-md-12" onClick={()=>{
                        navigate("/canapes")
                    }}>Seguir comprando</button>
                </div>
            </section>
        </div>
        </>
    )
}
export default CarritoPage