// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBraRB90MWlCUol2VYccaayF8yseWp0q1Q",
  authDomain: "todo-assignment-4669b.firebaseapp.com",
  projectId: "todo-assignment-4669b",
  storageBucket: "todo-assignment-4669b.appspot.com",
  messagingSenderId: "274733739145",
  appId: "1:274733739145:web:4abeb52183f77791e96a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);