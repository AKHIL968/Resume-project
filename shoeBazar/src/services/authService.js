import { auth, db } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

const ADMIN_EMAIL = 'admin@example.com'; // Replace with your admin email
const ADMIN_PASSWORD = 'adminpassword123'; // Replace with your admin password

export const signUp = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName });
        
        // Create user profile in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            displayName: displayName,
        });
        
        return user;
    } catch (error) {
        console.error("Sign-up error:", error.code, error.message);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
        console.log("Sign-in successful:", user);
        return { user, isAdmin };
    } catch (error) {
        console.error("Sign-in error:", error.code, error.message);
        throw error;
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Sign-out error:", error.code, error.message);
        throw error;
    }
};

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Password reset error:", error.code, error.message);
        throw error;
    }
};