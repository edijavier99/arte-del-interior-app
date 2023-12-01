import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () =>{
    const navigate = useNavigate()

    const getVerificationCode = () => {
        var url = window.location.href;
        var urlParams = new URLSearchParams(url);
        var actionCode = urlParams.get('oobCode');
        console.log(actionCode);
        return actionCode;
      };
    useEffect(() => {
        const actionCode = getVerificationCode();
        if (actionCode) {
            navigate("/login")
        }
      }, []);
      
    return(
        <>
        
        </>
    )
}
export default VerifyEmail