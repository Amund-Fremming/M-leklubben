import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from"firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXFHt8UwUImTqZ-7O6Lwg7QXCyX-1rvL4",
    authDomain: "maaleklubben.firebaseapp.com",
    projectId: "maaleklubben",
    storageBucket: "maaleklubben.appspot.com",
    messagingSenderId: "1007331151633",
    appId: "1:1007331151633:web:3e638053dcd1fc483186b0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);