// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBySNeY9SN-71jPagKeDPenfx0VF96Y2VQ",
    authDomain: "braincards-2025.firebaseapp.com",
    projectId: "braincards-2025",
    storageBucket: "braincards-2025.firebasestorage.app",
    messagingSenderId: "851710699170",
    appId: "1:851710699170:web:6216747d56f270fd7a59fb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
