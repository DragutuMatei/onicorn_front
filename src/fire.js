import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcpmC2mUuQp3LF4kmu8S-zKJD8LMooOZc",
    authDomain: "onicorn-19108.firebaseapp.com",
    projectId: "onicorn-19108",
    storageBucket: "onicorn-19108.appspot.com",
    messagingSenderId: "706826809518",
    appId: "1:706826809518:web:740148b52bfab03844fd3f",
    measurementId: "G-P04ZW6E6C2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);