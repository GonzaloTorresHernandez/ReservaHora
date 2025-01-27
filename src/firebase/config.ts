import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getEnv } from '../helpers/getEnv';


const {
    VITE_API_KEY, 
    VITE_AUTH_DOMAIN, 
    VITE_PROJECT_ID, 
    VITE_STORAGE_BUCKET, 
    VITE_MESSAGING_SENDER_ID, 
    VITE_APP_ID
} = getEnv();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp ); //  Autenticacion
// export const FirebaseDB = getFirestore( FirebaseApp );   //  Base de datos