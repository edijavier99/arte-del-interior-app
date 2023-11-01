import React from "react";
import "../../styles/carouselhome.css"
import { useNavigate } from "react-router-dom";

const CarouselHome = () =>{
  const navigate = useNavigate()
    return(
      <div className="carousel-container">

        <div id="carouselHome" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="    https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <div className="d-flex flex-row justify-content-around  h-50" id="slogan">
          <div className="smallSlogan">
            <h2>Descubre.</h2>
            <h3>Compra.</h3>
            <h4>Disfruta.</h4>
          </div>
          <p id="description1"> Comodidad y satisfacción <br/> garantizadas."</p>
        </div>
        <button className=" btnComprar"  onClick={()=>navigate("/sofas")}>Comprar</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <div className="d-flex flex-row justify-content-around  h-50" id="slogan">
          <div className="smallSlogan">
            <h2>Descubre.</h2>
            <h3>Compra.</h3>
            <h4>Disfruta.</h4>
          </div>
          <p id="description1"> Comodidad y satisfacción <br/> garantizadas."</p>
        </div>
        <button className="btnComprar" onClick={()=>navigate("/canapes")}>Comprar</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <div className="d-flex flex-row justify-content-around  h-50" id="slogan">
          <div className="smallSlogan">
            <h2>Descubre.</h2>
            <h3>Compra.</h3>
            <h4>Disfruta.</h4>
          </div>
          <p id="description1"> Comodidad y satisfacción <br/> garantizadas."</p>
        </div>
        <button className=" btnComprar" onClick={()=>navigate("/colchones")}>Comprar</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

    )
}
export default CarouselHome