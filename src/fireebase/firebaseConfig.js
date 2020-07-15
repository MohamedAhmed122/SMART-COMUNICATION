import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCUQA9i7E3HJhE9pGRlmUNq7NuI--hZl9w",
  authDomain: "re-vents-e73b4.firebaseapp.com",
  databaseURL: "https://re-vents-e73b4.firebaseio.com",
  projectId: "re-vents-e73b4",
  storageBucket: "re-vents-e73b4.appspot.com",
  messagingSenderId: "629622995328",
  appId: "1:629622995328:web:b0f3aaf2acc9af622ea965",
  measurementId: "G-7HB7J529Q0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google authentication

// //this gives you an access to goole auth class provider
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account",
// });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
