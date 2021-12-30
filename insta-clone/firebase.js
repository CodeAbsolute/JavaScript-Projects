// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5qWClPSB7fEP3uF2jkRN57T3yIWLNMQM",
  authDomain: "insta-clone-dc4ef.firebaseapp.com",
  projectId: "insta-clone-dc4ef",
  storageBucket: "insta-clone-dc4ef.appspot.com",
  messagingSenderId: "959603807364",
  appId: "1:959603807364:web:e41f93f1573a9242bf9ed1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
