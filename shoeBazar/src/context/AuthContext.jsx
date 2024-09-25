import React, { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserProfile } from "../services/userService";

export const AuthContext = createContext();

const ADMIN_EMAIL = 'admin@example.com'; // Replace with your admin email

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const userProfile = await getUserProfile(firebaseUser.uid);
                setUser({
                    ...firebaseUser,
                    displayName: userProfile?.displayName || firebaseUser.displayName || firebaseUser.email.split('@')[0]
                });
                setIsAdmin(firebaseUser.email === ADMIN_EMAIL);
                console.log("User authenticated:", firebaseUser);
            } else {
                setUser(null);
                setIsAdmin(false);
                console.log("User signed out");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        user,
        isAdmin,
        setUser,
        setIsAdmin
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};