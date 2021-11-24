import React from "react";
import { auth } from "../firebase/firebase";

const Home=()=>{
    const signOut=()=>{
        auth.signOut();
    }
    return(
        <> 
            <button onClick={signOut}>Salir</button>
        </>
    )
}
export default Home;