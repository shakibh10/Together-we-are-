// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQqQlGwoRJSQnGJLSTZCk7_IEHgvJdGI",
  authDomain: "together-we-are-a9a52.firebaseapp.com",
  projectId: "together-we-are-a9a52",
  storageBucket: "together-we-are-a9a52.appspot.com",
  messagingSenderId: "49891351020",
  appId: "1:49891351020:web:c280c03386b59581c788c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
