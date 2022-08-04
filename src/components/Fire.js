import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAwb5CyUFANEBOJwWHLYp3ZeRofr861VLg",
  authDomain: "graffer-3cd22.firebaseapp.com",
  projectId: "graffer-3cd22",
  storageBucket: "graffer-3cd22.appspot.com",
  messagingSenderId: "314722880371",
  appId: "1:314722880371:web:2b5aea3103432a53769306",
  measurementId: "G-LXZVFWT96L"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();

export {auth, db};
