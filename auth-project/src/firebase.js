import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  FIREBASE_APP_AUTH_DOMAIN,
  FIREBASE_APP_ID,
  FIREBASE_APP_MESSAGE_SENDER_ID,
  FIREBASE_APP_PROJECT_ID,
  FIREBASE_APP_STORAGE_BUCKET,
  FIREBASE_APP_API_KEY,
} from "./config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_APP_API_KEY,
  authDomain: FIREBASE_APP_AUTH_DOMAIN,
  projectId: FIREBASE_APP_PROJECT_ID,
  storageBucket: FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_APP_MESSAGE_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth();

export { auth, app };
