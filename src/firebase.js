import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXFHt8UwUImTqZ-7O6Lwg7QXCyX-1rvL4",
    authDomain: "maaleklubben.firebaseapp.com",
    projectId: "maaleklubben",
    storageBucket: "maaleklubben.appspot.com",
    messagingSenderId: "1007331151633",
    appId: "1:1007331151633:web:3e638053dcd1fc483186b0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);