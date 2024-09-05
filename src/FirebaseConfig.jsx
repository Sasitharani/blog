// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwv7d5CgxFXpiYbaR9EsG7RG0GMGm-WU",
  authDomain: "blogdb-c4aaf.firebaseapp.com",
  databaseURL: "https://blogdb-c4aaf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blogdb-c4aaf",
  storageBucket: "blogdb-c4aaf.appspot.com",
  messagingSenderId: "779319511021",
  appId: "1:779319511021:web:27c3833948d78781abc9e4",
  measurementId: "G-K11PKW34QN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
