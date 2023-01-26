// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9CWT0MbCPP_mf9gyP5I2r3zZOD2pOszM",
  authDomain: "realtor-clone2.firebaseapp.com",
  projectId: "realtor-clone2",
  storageBucket: "realtor-clone2.appspot.com",
  messagingSenderId: "274107982013",
  appId: "1:274107982013:web:f17286a28742a7591b57d4",
  measurementId: "G-ZGN1CY89FJ"
};

initializeApp(firebaseConfig);
export const db= getFirestore()