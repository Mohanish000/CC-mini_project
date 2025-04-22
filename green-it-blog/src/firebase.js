// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDn7NHMT1dQgV3Ynx7TvZwJYTHCFay0yTQ",
    authDomain: "green-tech-blog.firebaseapp.com",
    projectId: "green-tech-blog",
    storageBucket: "green-tech-blog.firebasestorage.app",
    messagingSenderId: "1070207509071",
    appId: "1:1070207509071:web:8b3e51c460f82ecb0c003a",
    measurementId: "G-LM0EQZWDDW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };