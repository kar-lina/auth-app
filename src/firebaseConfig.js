// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwBN2Jug_ybigu7xQvoNH2ifnN9TpHTAk",
  authDomain: "auth-app-6f6ce.firebaseapp.com",
  projectId: "auth-app-6f6ce",
  storageBucket: "auth-app-6f6ce.appspot.com",
  messagingSenderId: "922447905205",
  appId: "1:922447905205:web:74613e52a70afa45a699fc",
  measurementId: "G-10F5F2LD3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth();

export { app, auth };
