// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT0A9sRaQ5TQM6qRBIx30IRgu3yx4CQE4",
  authDomain: "rapid-insight-app.firebaseapp.com",
  projectId: "rapid-insight-app",
  storageBucket: "rapid-insight-app.appspot.com",
  messagingSenderId: "627283403903",
  appId: "1:627283403903:web:2effcd53bce61098350b4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
