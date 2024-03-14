// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-commerce-8b451.firebaseapp.com",
  projectId: "e-commerce-8b451",
  storageBucket: "e-commerce-8b451.appspot.com",
  messagingSenderId: "539565065083",
  appId: "1:539565065083:web:d0321b2b3061cc7ee173de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);