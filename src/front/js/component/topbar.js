import React from "react";
import "../../styles/topbar.css"

const TopBar = () =>{
    return (
        <div className="container-fluid p-0">
            <div className="row bg-dark" id="announceBoard">
                <div className="col-md-6 offset-md-3">
                    <marquee className="mt-2"><h5>ENVIOS POR TODA LA PENINSULA IBERICA</h5></marquee>
                </div>
                <div class="col-md-3 d-flex justify-content-end px-4" id="iconsHome">
                    <i className="fa-brands iconTopBar fa-facebook-f mx-3"></i>
                    <i className="fa-brands iconTopBar fa-instagram mx-3"></i>
                    <i className="fa-brands iconTopBar fa-twitter mx-3"></i>
                    <i className="fa-brands iconTopBar fa-whatsapp mx-3"></i>
                </div>
            </div>
        </div>    


    )
}
export default TopBar