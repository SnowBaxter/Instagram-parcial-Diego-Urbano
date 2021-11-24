import firebase from 'firebase/compat/app'
import'firebase/compat/auth';
const firebaseConfig={
  apiKey: "AIzaSyCeAtIHucoVC2bs7Plrc_FYGUfc-sZ-GOQ",
  authDomain: "react-78c15.firebaseapp.com",
  projectId: "react-78c15",
  storageBucket: "react-78c15.appspot.com",
  messagingSenderId: "945307428271",
  appId: "1:945307428271:web:2fa96d1ec20433bd5ffb5a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }