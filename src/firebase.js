import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableMultiTabIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBO3Kxt-PRSrZWe7f_XB0V7Y6IpEp0mSi0",
    authDomain: "numisapp-51374.firebaseapp.com",
    projectId: "numisapp-51374",
    storageBucket: "numisapp-51374.firebasestorage.app",
    messagingSenderId: "120748111584",
    appId: "1:120748111584:web:eead6e213e5964f3308285"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable Offline Persistence
enableMultiTabIndexedDbPersistence(db).catch((err) => {
    console.error("Persistence disabled:", err.code);
});
