
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from './firebase-config'
import { getMessaging } from 'firebase/messaging/sw';

export const firebaseApp = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();

getMessaging(firebaseApp);
console.info('Firebase messaging service worker is set up');