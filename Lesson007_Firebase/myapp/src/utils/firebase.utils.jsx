// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJFy3eLJ0Fk-O0SP02dkdg-Q_aa1p9yTM",
  authDomain: "test-db-b8f6a.firebaseapp.com",
  projectId: "test-db-b8f6a",
  storageBucket: "test-db-b8f6a.appspot.com",
  messagingSenderId: "802236076948",
  appId: "1:802236076948:web:c8df04826b07c3e0fff581",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // if (!userSnapshot.exists()) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();
  //   try {
  //     await setDoc(userDocRef,{displayName,email,createdAt});
  //   } catch (error) {
  //     console.log("error creating the user:",error.message);
  //   }
  // }
  // return userDocRef;
};
