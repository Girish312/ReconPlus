import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX2DnWhNkT7Z21EmqZuYBdOpfXC23Qa6E",
  authDomain: "reconplus.firebaseapp.com",
  projectId: "reconplus",
  storageBucket: "reconplus.firebasestorage.app",
  messagingSenderId: "40996104683",
  appId: "1:40996104683:web:4ad32de350f19e9c4251ae",
  measurementId: "G-VTXM393K0C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence
try {
  enableIndexedDbPersistence(db);
} catch (err) {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support all of the features required to enable persistence');
  }
}

