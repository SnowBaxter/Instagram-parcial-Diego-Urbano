import "../styles/SignIn.scss"
import React from "react";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import  SignIMG from "../images/Smg.png"
import logo from "../images/instagramLogo.png";

const SignIn =()=>{

    const SignInWithFirebase=()=>{
        const google_provider = new GoogleAuthProvider()
        signInWithPopup(auth, google_provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className= "ContainerLogin">
            <img className="SignIMG"src={SignIMG} alt="InstagramSignin"/>
         <div className="ABox">
            <img className="logo" src={logo} alt="instagram logo" />
            <span className="LoginText1">Teléfono, usuario o correo electrónico</span>
            <span className="LoginText2">Contraseña</span>
            <span className="LoginText3">Iniciar sesíon</span>
             <button className="ContinuarConGoogle" onClick={SignInWithFirebase}>Continuar con Google</button>

             <span className="LoginText4">¿Olvidaste tu contraseña?</span>
         </div>
            
        </div>
        
    )
}   
export default SignIn