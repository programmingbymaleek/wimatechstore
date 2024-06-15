import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  setDoc,
  writeBatch,
  query,
  collection,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

//creating the database..

export const db = getFirestore();
//add category to firestore.. ie build category with json objects..
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  //create a snapshot for refrence.
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("There was an error creating this user::", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  if (response) {
    const { user } = response;
    user.displayName = displayName;
    return user;
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
