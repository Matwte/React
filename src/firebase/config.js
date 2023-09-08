// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBooA2MvsLJC4TyPuX_LHK6aYdiiXmfUN4",
  authDomain: "shoeshop-fde1c.firebaseapp.com",
  projectId: "shoeshop-fde1c",
  storageBucket: "shoeshop-fde1c.appspot.com",
  messagingSenderId: "596735787281",
  appId: "1:596735787281:web:26755ca9be123fb8020cb0",
  measurementId: "G-1L4Y5GDJN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);