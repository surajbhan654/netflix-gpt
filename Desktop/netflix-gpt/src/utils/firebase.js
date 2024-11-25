// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz_cLeiFUlqEC5BB6izHs1MJ5riju9_34",
  authDomain: "netflix-gpt-bc08e.firebaseapp.com",
  projectId: "netflix-gpt-bc08e",
  storageBucket: "netflix-gpt-bc08e.firebasestorage.app",
  messagingSenderId: "357116815338",
  appId: "1:357116815338:web:2b5b98676614a2896f3493",
  measurementId: "G-HNCWPQZ1XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();