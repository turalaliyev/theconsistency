import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0yf24JqxUXNlxKZq43IUMcfdnDHzypr8',
  authDomain: 'the-consistency.firebaseapp.com',
  databaseURL:
    'https://the-consistency-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'the-consistency',
  storageBucket: 'the-consistency.appspot.com',
  messagingSenderId: '669736724037',
  appId: '1:669736724037:web:d35a591a76942a707a252c',
  measurementId: 'G-G2XX45S36F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
