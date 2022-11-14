// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoDfJLqYBCgdfxkZfhwHrMUhTbH8Nr1Uo",
  authDomain: "portfolio-8bbe5.firebaseapp.com",
  projectId: "portfolio-8bbe5",
  storageBucket: "portfolio-8bbe5.appspot.com",
  messagingSenderId: "815715130465",
  appId: "1:815715130465:web:80babbecff1dd717189e20",
  measurementId: "G-RBDEYL249L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
