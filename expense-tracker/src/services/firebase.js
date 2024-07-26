// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIiODaS2P0aS11HT_YqVuAHl7aHK6SY0c",
  authDomain: "expensetracker-ae256.firebaseapp.com",
  projectId: "expensetracker-ae256",
  storageBucket: "expensetracker-ae256.appspot.com",
  messagingSenderId: "778755330430",
  appId: "1:778755330430:web:d6e415028ea4d581d2232f",
  measurementId: "G-HC15QF1L66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
