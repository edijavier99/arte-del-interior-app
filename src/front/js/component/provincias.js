import React from "react";

const Provincias = () =>{
    return(
        <>
        <select class="form-select" className="mb-3" style={{height:40,paddingLeft:10}} aria-label="Selecciona una provincia">
            <option selected disabled>Elige una provincia</option>
            <option value="alava">Álava</option>
            <option value="albacete">Albacete</option>
            <option value="alicante">Alicante</option>
            <option value="almeria">Almería</option>
            <option value="asturias">Asturias</option>
            <option value="avila">Ávila</option>
            <option value="badajoz">Badajoz</option>
            <option value="barcelona">Barcelona</option>
            <option value="burgos">Burgos</option>
            <option value="caceres">Cáceres</option>
            <option value="cadiz">Cádiz</option>
            <option value="cantabria">Cantabria</option>
            <option value="castellon">Castellón</option>
            <option value="ciudad_real">Ciudad Real</option>
            <option value="cordoba">Córdoba</option>
            <option value="cuenca">Cuenca</option>
            <option value="gerona">Gerona</option>
            <option value="granada">Granada</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="guipuzcoa">Guipúzcoa</option>
            <option value="huelva">Huelva</option>
            <option value="huesca">Huesca</option>
            <option value="islas_baleares">Islas Baleares</option>
            <option value="jaen">Jaén</option>
            <option value="la_coruna">La Coruña</option>
            <option value="la_rioja">La Rioja</option>
            <option value="las_palmas">Las Palmas</option>
            <option value="leon">León</option>
            <option value="lleida">Lleida</option>
            <option value="lugo">Lugo</option>
            <option value="madrid">Madrid</option>
            <option value="malaga">Málaga</option>
            <option value="murcia">Murcia</option>
            <option value="navarra">Navarra</option>
            <option value="ourense">Ourense</option>
            <option value="palencia">Palencia</option>
            <option value="pontevedra">Pontevedra</option>
            <option value="salamanca">Salamanca</option>
            <option value="segovia">Segovia</option>
            <option value="sevilla">Sevilla</option>
            <option value="soria">Soria</option>
            <option value="tarragona">Tarragona</option>
            <option value="santa_cruz_de_tenerife">Santa Cruz de Tenerife</option>
            <option value="teruel">Teruel</option>
            <option value="toledo">Toledo</option>
            <option value="valencia">Valencia</option>
            <option value="valladolid">Valladolid</option>
            <option value="vizcaya">Vizcaya</option>
            <option value="zamora">Zamora</option>
            <option value="zaragoza">Zaragoza</option>
        </select>

        </>
    )
}

export default Provincias