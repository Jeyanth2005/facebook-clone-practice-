// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore, serverTimestamp} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr8ST0UC5XYK2YY3LczcsVYkI6pljrUOM",
  authDomain: "facebook-clone-9dd03.firebaseapp.com",
  projectId: "facebook-clone-9dd03",
  storageBucket: "facebook-clone-9dd03.firebasestorage.app",
  messagingSenderId: "709637783752",
  appId: "1:709637783752:web:27fb780a621c6c5463a5fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore();
const auth=getAuth();
const provider=new GoogleAuthProvider();
const storage=getStorage();
const timestamp=serverTimestamp();
export {db, auth, provider, storage, timestamp};