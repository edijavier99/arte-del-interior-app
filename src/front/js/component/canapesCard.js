import React from "react";
import "../../styles/canapesCard.css"
import { useNavigate, useParams } from "react-router-dom";


const CanapesCard = (props) =>{
  const navigate= useNavigate()
        return(
            <div className="container-fluid my-3" id="canapeCard">
                <div className="canapeCardImage">
                    <img src={props.canape.image}  className="p-2"/>
                </div>
                <div className=" d-flex flex-column align-items-center justify-content-center">
                  <h4 id="canapeTitle" className="col-md-10">{props.canape.title}</h4>
                  <div className="d-flex flex-row col-md-12  p-2 justify-content-around">
                    <div className="d-flex flex-column  text-center">
                      <p><strong>Capacidad</strong></p>
                      <p>{props.canape.capacidad}cm</p>
                    </div>
                    <div className="d-flex flex-column  text-center">
                      <p><strong>Colores</strong></p>
                      <p>{props.canape.color}</p>
                    </div>
                    <div className="d-flex flex-column text-center">
                      <p> <strong>Profondidad</strong></p>
                      <p>{props.canape.profundidad}</p>
                    </div>
                  </div>
                  <button className="btn btn-dark col-md-12 verMasBtn rounded-0" onClick={()=>navigate(`${props.single}`)}>VER</button>
                </div>
            </div>
    )
}
export default CanapesCard