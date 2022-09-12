import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-X8ATbn9tNM4zCZyUoGWPwZKbcWoRQ6M',
  authDomain: 'crwn-clothing-db-98618.firebaseapp.com',
  projectId: 'crwn-clothing-db-98618',
  storageBucket: 'crwn-clothing-db-98618.appspot.com',
  messagingSenderId: '993250683420',
  appId: '1:993250683420:web:e229258bab1c367b3b8dd9',
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
