// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7COsAi1kBhUpK-3sZc2EJpxGmdy6Pv1Y",
  authDomain: "flashcard-62d67.firebaseapp.com",
  databaseURL: "https://flashcard-62d67-default-rtdb.firebaseio.com",
  projectId: "flashcard-62d67",
  storageBucket: "flashcard-62d67.appspot.com",
  messagingSenderId: "1048671868665",
  appId: "1:1048671868665:web:2ee105721564d410247428",
  measurementId: "G-74BNKDNBVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);