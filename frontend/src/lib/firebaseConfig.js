// src/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1tjGS9JhF-hqyVve7Eg8PYDlKp0UUK84",
  authDomain: "portfollio-4f540.firebaseapp.com",
  projectId: "portfollio-4f540",
  storageBucket: "portfollio-4f540.firebasestorage.app",
  messagingSenderId: "966243151649",
  appId: "1:966243151649:web:94ab90257de18f6f259860",
  measurementId: "G-RESJ35ZG0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
