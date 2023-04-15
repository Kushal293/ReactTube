// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD91lTaE9gVfZjV8FFoS6X9d9D3OgQ1biA",
  authDomain: "fir-e6359.firebaseapp.com",
  projectId: "fir-e6359",
  storageBucket: "fir-e6359.appspot.com",
  messagingSenderId: "199766282745",
  appId: "1:199766282745:web:2df97d349b73001acd2d28",
  measurementId: "G-K0KHLSKZGB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuth = new GoogleAuthProvider();

export const db = getFirestore(app);
