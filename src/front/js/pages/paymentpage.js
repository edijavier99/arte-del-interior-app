import React, { useContext } from "react";
import Provincias from "../component/provincias";
import StripePayment from "../component/stripepayment";
import "../../styles/paymentpage.css"
import { Context } from "../store/appContext";

const PaymentView = () =>{

    const {store,actions} = useContext(Context)
    const items = store.carrito

    return(
        <section className="container-fluid bg-light d-flex justify-content-around" id="paymentPage">
            <div className="col-md-6 d-flex flex-column border border-white p-4" id="paymentBoard">
                <label for="correoElectronico">Correo electrónico</label>
                <input type="email" id="correoElectronico" placeholder="Dirección de correo electrónico" className="p-3 mb-3" name="correoElectronico" />

                <label for="nombreCompleto">Nombre completo</label>
                <input type="text" id="nombreCompleto" placeholder="Nombre completo" className="p-3 mb-3" name="nombreCompleto" />

                <label for="pais">País</label>
                <select class="form-select" id="pais" aria-label="Default select example">
                    <option selected>Seleccionar</option>
                    <option value="1">España</option>
                </select>

                <label for="provincia" className="mt-3">Provincia</label>
                <Provincias id="provincia"/>
                
                <label for="Población">Población</label>
                <input type="text" id="Población" placeholder="Población" className="p-3 mb-3" name="Población" />

                <label for="domicilio">Domicilio</label>
                <input type="text" id="domicilio" placeholder="Domicilio" className="p-3 mb-3"  name="domicilio" />

                <label for="codigoPostal">Codigo postal </label>
                <input type="text" id="codigoPostal" placeholder="Código postal" className="p-3 mb-3" name="codigoPostal" />

                <label for="movil">Número de teléfono</label>
                <input type="text" id="movil" placeholder="Número de contacto" className="p-3 mb-3" name="movil" />

                <StripePayment totalACobrar={actions.sumarTotalPrecio(items)} />

            </div>
            <div className="col-md-4" id="resumenPedido">
                <h2>Resumen del pedido</h2>
                <p> {(store.carrito && store.carrito!=null && store.carrito!=undefined)? store.carrito.length:"0"} articulos</p>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Mostrar
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          {actions.showCarrrito(items)}
                        </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-row justify-content-between">
                    <h4>Total a pagar </h4>
                    <h4>{actions.sumarTotalPrecio(items)} €</h4>
                </div>
            </div>
        </section>
    )
}

export default PaymentView