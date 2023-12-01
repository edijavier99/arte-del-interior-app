import React from "react";
import Provincias from "../component/provincias";
import StripePayment from "../component/stripepayment";
import "../../styles/paymentpage.css"


const PaymentView = () =>{
    return(
        <section className="container-fluid d-flex justify-content-center">
            <div className="col-md-6 d-flex flex-column" id="paymentBoard">
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

                <label for="domicilio">Domicilio</label>
                <input type="text" id="domicilio" placeholder="Domcilio" className="p-3 mb-3"  name="domicilio" />

                <label for="codigoPostal">Codigo postal </label>
                <input type="text" id="codigoPostal" placeholder="Código postal" className="p-3 mb-3" name="codigoPostal" />

                <StripePayment />

            </div>
        </section>
    )
}

export default PaymentView