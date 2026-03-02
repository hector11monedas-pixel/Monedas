import { initializeApp } from 'firebase/app';
import { getFirestore, collectionGroup, query, where, getDocs } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testQuery() {
    try {
        console.log("Querying...");
        const q = query(collectionGroup(db, 'coins'), where("imageStatus", "==", "pending"));
        const snapshot = await getDocs(q);
        console.log(`Found ${snapshot.docs.length} pending coins.`);
        snapshot.docs.forEach(d => {
            console.log(d.id, d.data());
        });
    } catch (e) {
        console.error("Query failed:", e);
    }
}

testQuery();
