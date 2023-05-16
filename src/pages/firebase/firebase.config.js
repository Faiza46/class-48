// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDul8x0iZu43NZw7QHuJYy9uUJnVc6gb4s",
    authDomain: "login-with-auth-context.firebaseapp.com",
    projectId: "login-with-auth-context",
    storageBucket: "login-with-auth-context.appspot.com",
    messagingSenderId: "359409247537",
    appId: "1:359409247537:web:c86c3f148971f86f317c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;