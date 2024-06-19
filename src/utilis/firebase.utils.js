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
  apiKey: 'AIzaSyDFX-z4GfsJzK4Ep_KJd3icXmV7kBka9EM',
  authDomain: 'requisition-system.firebaseapp.com',
  projectId: 'requisition-system',
  storageBucket: 'requisition-system.appspot.com',
  messagingSenderId: '409911220321',
  appId: '1:409911220321:web:9560326b5f9d44e8b17220',
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
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformantion = {}
) => {
  if (!userAuth) return;
  //create a snapshot for refrence.
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformantion,
      });
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
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const getUserDocumentFromFireBase = async (uid) => {
  if (!uid) return null;
  // Get a reference to the 'users' collection
  const collectionRef = collection(db, "users");
  // Get a reference to the specific document within the 'users' collection
  const userDocRef = doc(collectionRef, uid);
  // Fetch the document
  const userDocSnap = await getDoc(userDocRef);
  // Check if the document exists and return the data, otherwise return null
  if (userDocSnap.exists()) {
    return userDocSnap.data();
  } else {
    console.log("No such user");
    return null;
  }
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const SignOutUser = async () => await signOut(auth);
