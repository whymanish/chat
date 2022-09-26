import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBXpJink0FpyTcNkFlcMogPRDbRRSemsMw",
  authDomain: "chat-c13ca.firebaseapp.com",
  projectId: "chat-c13ca",
  storageBucket: "chat-c13ca.appspot.com",
  messagingSenderId: "277514235349",
  appId: "1:277514235349:web:56892026c79ad467cb215c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();