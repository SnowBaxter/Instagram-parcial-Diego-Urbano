import "../styles/App.scss";
import React, {useState} from "react";
import { auth } from "../firebase/firebase";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import SignIn from "./SignIn";


function App() {
  const [isUserSignedIn, setIsUserSignedIn]= useState(true);
  auth.onAuthStateChanged((user)=>{
  if(user){
    return setIsUserSignedIn(true);
  }
  setIsUserSignedIn(false);
})
if(isUserSignedIn === true){
  return(
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  )
}else{
  return(
    <div className="InicioSesion">
      <SignIn/>
    </div>
    
  )
}
}

export default App;
