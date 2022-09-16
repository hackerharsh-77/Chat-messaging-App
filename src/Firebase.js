import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC19Bf1Ky0IKSKg8VVUfMO1iBoi9Bw8C2o",
  authDomain: "chat-1c6be.firebaseapp.com",
  projectId: "chat-1c6be",
  storageBucket: "chat-1c6be.appspot.com",
  messagingSenderId: "1030070881077",
  appId: "1:1030070881077:web:59e4a92b4d57a33efcda7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
