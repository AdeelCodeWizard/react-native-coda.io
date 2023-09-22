import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApMC4DUuqOOtL8fqSeMXAI_jR_yCpaWxY",
  authDomain: "codadoctestapp.firebaseapp.com",
  projectId: "codadoctestapp",
  storageBucket: "codadoctestapp.appspot.com",
  messagingSenderId: "840554709520",
  appId: "1:840554709520:web:f9a82be09c3f501e490095",
  measurementId: "G-TC1E55LGXM"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);