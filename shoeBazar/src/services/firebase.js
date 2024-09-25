import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {

  apiKey: "AIzaSyDILxfxntB0U3MOL0AQ8Fd6BcQIoDyQlbE",
  authDomain: "shoebazaar-b69ce.firebaseapp.com",
  projectId: "shoebazaar-b69ce",
  storageBucket: "shoebazaar-b69ce.appspot.com",
  messagingSenderId: "656754737337",
  appId: "1:656754737337:web:ceefaf6c03bdcb4e2e1b68",
  measurementId: "G-LX5ERF6XWX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };