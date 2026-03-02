import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';

import { AuthContext } from './Contexts';

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // Define admins here. In a real app, this might come from a Firestore collection 'roles'
    const ADMIN_EMAILS = [
        'hector11monedas@gmail.com', // Replace with the actual admin email or add more
        'hector.monedas@gmail.com'
    ];

    const isAdmin = currentUser && currentUser.email && ADMIN_EMAILS.includes(currentUser.email);

    const value = {
        currentUser,
        isAdmin,
        loginWithGoogle,
        logout
    };

    if (loading) {
        return <div className="loading-screen">Cargando...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
