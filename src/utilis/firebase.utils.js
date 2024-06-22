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
//add category to firestore.. ie build category with json objects.

//add category to firestore.. ie build the category database with the json
export const addCollectionAndDocuments = async (
  collectionKey,
  jsonObjectToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  console.log("testing doc");
  console.log(collectionRef);

  jsonObjectToAdd.forEach((object) => {
    console.log(object);
    const docRef = doc(collectionRef, object.productType);
    batch.set(docRef, object);
  });
  await batch.commit(); //commit batch.
  console.log("done");
};

export const addCompletedOrders = async (userId, ordersToAdd) => {
  const userOrdersRef = collection(db, "orders", userId, "userOrders");
  const batch = writeBatch(db);

  try {
    // Check if the user document exists
    const userDocRef = doc(db, "orders", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      // If the user exists, get their existing orders
      const existingOrdersSnapshot = await getDocs(userOrdersRef);
      const existingOrders = existingOrdersSnapshot.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data();
        return acc;
      }, {});

      // Combine existing orders with new orders
      ordersToAdd.forEach((order) => {
        const orderId = order.date; // Ensure date is a string
        existingOrders[orderId] = order;
      });

      // Update the user's orders with the combined list
      Object.entries(existingOrders).forEach(([orderId, orderData]) => {
        const orderRef = doc(userOrdersRef, orderId);
        batch.set(orderRef, orderData);
      });
    } else {
      // If the user doesn't exist, create a new user document with the orders
      ordersToAdd.forEach((order) => {
        const orderId = order.date.toISOString(); // Ensure date is a string
        const orderRef = doc(userOrdersRef, orderId);
        batch.set(orderRef, order);
      });

      const documentPath = `orders/${userId}`; // Example path
      const documentRef = doc(db, documentPath);
      await setDoc(documentRef, { orderId: `order_${userId}` });
    }

    // Commit the batch write operation
    await batch.commit();
    console.log("Orders successfully added for user", userId);
  } catch (error) {
    console.error("Error adding orders:", error);
    throw error;
  }
};

//get category collection from  fireBase store..
export const getCategoriesAndDocumentFromFireBase = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
    // console.log(docSnapshot.data())

    const { productType, items } = docSnapshot.data();
    acc[productType.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const getOrderHistoryFromFireBase = async (uid) => {
  const dataTest = [];
  const collectionRef = collection(db, "orders", uid, "userOrders");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);

  querySnapShot.docs.forEach((docSnapshot) => {
    const { items } = docSnapshot.data();
    dataTest.push(...items);
  });

  console.log("data test", dataTest);
  return dataTest;
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
    console.log("No such document!");
    return null;
  }
};

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

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const SignOutUser = async () => await signOut(auth);
