// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnnFO64XkshFxrPdlqgjSSOQwjo5GyiOU",
  authDomain: "shop-86fb4.firebaseapp.com",
  projectId: "shop-86fb4",
  storageBucket: "shop-86fb4.firebasestorage.app",
  messagingSenderId: "973195660146",
  appId: "1:973195660146:web:49c2b37723cb2489d3abeb",
  measurementId: "G-V8ZK2PDN5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
