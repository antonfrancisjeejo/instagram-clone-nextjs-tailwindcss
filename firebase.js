// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYomSarPaA0eZf9RZBcN7w3uygpxxFw60",
  authDomain: "instaclone-nextjs-70847.firebaseapp.com",
  projectId: "instaclone-nextjs-70847",
  storageBucket: "instaclone-nextjs-70847.appspot.com",
  messagingSenderId: "158681520267",
  appId: "1:158681520267:web:352b830e1ce94d5e0ddc8e",
};

// Initialize Firebase
// console.log(getApps.length());
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
