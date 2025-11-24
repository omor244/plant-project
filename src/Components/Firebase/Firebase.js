

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_qvVgvqb_Bw_z6j9NFX8zADM8DL14WsY",
    authDomain: "nextjs-project-481fc.firebaseapp.com",
    projectId: "nextjs-project-481fc",
    storageBucket: "nextjs-project-481fc.firebasestorage.app",
    messagingSenderId: "393866654180",
    appId: "1:393866654180:web:4715902feab9cbb9bc57f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth