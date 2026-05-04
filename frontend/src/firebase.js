import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhs1qPKBOkxqU4fLIe8EuUoQU8oplnWKg",
    authDomain: "shopping-cart-1e421.firebaseapp.com",
    projectId: "shopping-cart-1e421",
    storageBucket: "shopping-cart-1e421.firebasestorage.app",
    messagingSenderId: "345858332738",
    appId: "1:345858332738:web:d4648375a67ed5e308b5db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and the Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();