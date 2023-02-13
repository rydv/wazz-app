// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4UQ2Hryk0Kf6NSJgXM1pGzlogdrmA_6E",
    authDomain: "my-chat-bb980.firebaseapp.com",
    projectId: "my-chat-bb980",
    storageBucket: "my-chat-bb980.appspot.com",
    messagingSenderId: "434409876065",
    appId: "1:434409876065:web:e1a72eeb635f0aeffe9820"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()