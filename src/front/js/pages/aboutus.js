import React from "react";
import "../../styles/aboutus.css"

const AboutUs = ()=>{
    return(
        <>
            <section>
                <header>
                    <div className="row mb-5 m-0 p-0">
                        <div className="col-md-4 mt-3 d-flex align-items-center flex-column justify-content-center">
                            <h4>Sobre nosotros.</h4>
                            <h4>Nuestra misión.</h4>
                            <h4>Nosotro equipo.</h4>
                        </div>
                        <div className="col-md-7">
                            <h1 className="my-5">SOBRE NOSOTROS.</h1>
                            <p>En Arte del Interior, nos enorgullece ofrecerte una experiencia única en la creación de espacios acogedores y elegantes para tu hogar. Con una trayectoria sólida y años de experiencia en el sector, nos hemos consolidado como líderes en la venta de muebles, armarios, canapés y más, especializados en transformar dormitorios y salones en oasis de comodidad y estilo.
                            <br/> <br/>Nuestra misión es simple pero poderosa: queremos que cada rincón de tu hogar refleje tu personalidad y proporcione la máxima comodidad. Creemos que el mobiliario no solo debe ser funcional, sino también una expresión artística que hable de tus gustos y valores.</p>
                        </div>
                    </div>
                    <div id="aboutUsImage">
                        <img src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg" alt="imagen-equipo"/>
                    </div>
                </header>
                <main>
                    <div className="row m-0" id="secondContainer" >
                        <div className="col-md-6 m-0 p-0 mb-5 d-flex align-items-center flex-column justify-content-center">
                          <h1><i class="fas fa-quote-left"></i> Refleja tu esencia, <br/> transforma tu espacio: <br/> Muebles que capturan <br/> tu estilo, eco y único. <i class="fas fa-quote-right"></i></h1>
                        </div>
                        <div className="col-md-6 m-0 p-0" id="aboutUsImageDos">
                            <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/whiteboard-849813_1280.jpg" alt="imagen-organizacion"/>
                        </div>
                    </div>
                </main>
                <footer>

                </footer>
            </section>
        </>
    )
}
export default AboutUs