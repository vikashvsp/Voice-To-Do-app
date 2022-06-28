// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgYlClv3RyvmNYb1zuzTkJzPMca7wLbKY",
  authDomain: "voice-to-do-8a177.firebaseapp.com",
  projectId: "voice-to-do-8a177",
  storageBucket: "voice-to-do-8a177.appspot.com",
  messagingSenderId: "560005073799",
  appId: "1:560005073799:web:c4c152abbffb4bc4516122",
  measurementId: "G-K9MZ71GXGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database=getFirestore(app);

