import { db } from './firebase';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

// Function to get user profile data from Firestore
export const getUserProfile = async (userId) => {
    try {
        const userDoc = doc(db, 'users', userId);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
            console.log("User profile data:", userSnap.data());
            return userSnap.data();
        } else {
            console.log("No such user found!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user profile:", error);
        throw new Error("Failed to get user profile. Please try again later.");
    }
};

// Function to update user profile data in Firestore
export const updateUserProfile = async (userId, updatedData) => {
    try {
        const userDoc = doc(db, 'users', userId);
        await setDoc(userDoc, updatedData, { merge: true });
        console.log("Profile updated successfully");
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw new Error("Failed to update user profile. Please try again later.");
    }
};

// Function to create a new user profile in Firestore
export const createUserProfile = async (userId, userData) => {
    try {
        const userDoc = doc(db, 'users', userId);
        await setDoc(userDoc, userData);
        console.log("User profile created successfully");
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw new Error("Failed to create user profile. Please try again later.");
    }
};

// Function to delete a user profile from Firestore
export const deleteUserProfile = async (userId) => {
    try {
        const userDoc = doc(db, 'users', userId);
        await deleteDoc(userDoc);
        console.log("User profile deleted successfully");
    } catch (error) {
        console.error("Error deleting user profile:", error);
        throw new Error("Failed to delete user profile. Please try again later.");
    }
};