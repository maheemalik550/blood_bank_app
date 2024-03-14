// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {get, getDatabase, ref} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to uimse
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDogRntfS-4FuQ1H-_DNdPfOHsnSK4V_sM",
  authDomain: "calculator1-be2f2.firebaseapp.com",
  projectId: "calculator1-be2f2",
  storageBucket: "calculator1-be2f2.appspot.com",
  messagingSenderId: "789755149879",
  appId: "1:789755149879:web:a92d153a6b61054e04c9b2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getDatabase()
export {app,auth,database}



