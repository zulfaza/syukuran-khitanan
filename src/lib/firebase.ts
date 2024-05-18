// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMnvsiaqDKo_dtP-2r4Mj5Ht01BkuCK24',
  authDomain: 'undangan-sunat.firebaseapp.com',
  projectId: 'undangan-sunat',
  storageBucket: 'undangan-sunat.appspot.com',
  messagingSenderId: '410560155112',
  appId: '1:410560155112:web:6189fb164ba31ff739685d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
