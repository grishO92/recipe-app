import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfRS_dY2r7ooenLvxiD2pmKijOuZQdLwQ',
  authDomain: 'react-recipeland.firebaseapp.com',
  projectId: 'react-recipeland',
  storageBucket: 'react-recipeland.appspot.com',
  messagingSenderId: '600590780882',
  appId: '1:600590780882:web:2b8f425bb7ffe6e784600b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
