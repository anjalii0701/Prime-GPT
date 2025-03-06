// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0lDS7OF8XEFRCcDA8UgTfCsHS8qHskL4",
  authDomain: "prime-gpt-6f767.firebaseapp.com",
  projectId: "prime-gpt-6f767",
  storageBucket: "prime-gpt-6f767.firebasestorage.app",
  messagingSenderId: "717657057761",
  appId: "1:717657057761:web:8986b8ad0ba491388e0aa0",
  measurementId: "G-52G890T39G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
