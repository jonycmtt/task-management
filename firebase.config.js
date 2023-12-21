// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiuGVc1jRjqfCArBfBC8dBUIoEymfnE4Q",
  authDomain: "task-management-e10c0.firebaseapp.com",
  projectId: "task-management-e10c0",
  storageBucket: "task-management-e10c0.appspot.com",
  messagingSenderId: "227154599222",
  appId: "1:227154599222:web:81a3d17bc545edb3c4a797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;