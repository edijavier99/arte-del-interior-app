import React, { useState } from "react";
import TextDivider from "../component/textdivider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../utils/init-firebase";
import { useNavigate } from "react-router-dom";
import "../../styles/forgotpassword.css";


const ForgotPassword = () =>{
    const [email,setEmail] = useState("")
    const navigate = useNavigate("")

    const resetPasswordEmail = (email) =>{
        return sendPasswordResetEmail(auth,email, {url: "https://sample-service-name-vllh.onrender.com/login"})
    }

    return(
        <div className="forgotPassword container-fluid">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-md-4">
                    <h1 className="my-5 text-center">Contraseña Olvidada?</h1>
                    <div className="card-body border d-flex flex-column my-3 p-5">
                        <label id="forgotPassword" htmlFor="forgot-password" >Dirección de correo</label> 
                        <input placeholder="Email" 
                               type="text"
                               className="border col-md-12 my-3 bg-light px-3 rounded"
                               id="forgotPasswordEmail" 
                               value={email} 
                               onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <button className="btn btn-warning"
                                onClick={()=>{
                                    resetPasswordEmail(email)
                                    navigate("/")
                                }}
                        >Enviar</button>
                        <TextDivider/>
                        <div className="text-center">
                            <a href="/login" className=" btn bg-light col-md-2">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword