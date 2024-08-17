// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUUeW2ShL7D5R8WxDU2Bpw6q664kgysVs",
  authDomain: "flashcardsaas-f54d9.firebaseapp.com",
  projectId: "flashcardsaas-f54d9",
  storageBucket: "flashcardsaas-f54d9.appspot.com",
  messagingSenderId: "350405647234",
  appId: "1:350405647234:web:d59f54498a799aa8c34d9b",
  measurementId: "G-JNRXTH5PFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};