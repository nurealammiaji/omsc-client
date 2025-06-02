// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-CFG8PnAZLT7owsyCqSWNMthtw7ub3Q",
  authDomain: "omscbd.firebaseapp.com",
  projectId: "omscbd",
  storageBucket: "omscbd.firebasestorage.app",
  messagingSenderId: "58246778703",
  appId: "1:58246778703:web:54ee957cd4a6035b493f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;