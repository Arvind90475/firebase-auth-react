import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const apiKey = "AIzaSyBhsKQlNBUGwc6LguB1NsCzSrvve3mWwqw";
const authDomain = "react-auth-56a8f.firebaseapp.com";
const databaseURL = "https://react-auth-56a8f-default-rtdb.firebaseio.com";
const projectId = "react-auth-56a8f";
const storageBucket = "react-auth-56a8f.appspot.com";
const messagingSenderId = "919173591222";
const appId = "1:919173591222:web:77fbcb3127c8b1e77c7617";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_.apiKey || apiKey,
  // authDomain: process.env.REACT_APP_.authDomain || authDomain,
  // databaseURL: process.env.REACT_APP_.databaseURL || databaseURL,
  // projectId: process.env.REACT_APP_.projectId || projectId,
  // storageBucket: process.env.REACT_APP_.storageBucket || storageBucket,
  // messagingSenderId:
  //   process.env.REACT_APP_.messagingSenderId || messagingSenderId,
  // appId: process.env.REACT_APP_.appId || appId,

  apiKey: "AIzaSyBhsKQlNBUGwc6LguB1NsCzSrvve3mWwqw",
  authDomain: "react-auth-56a8f.firebaseapp.com",
  databaseURL: "https://react-auth-56a8f-default-rtdb.firebaseio.com",
  projectId: "react-auth-56a8f",
  storageBucket: "react-auth-56a8f.appspot.com",
  messagingSenderId: "919173591222",
  appId: "1:919173591222:web:77fbcb3127c8b1e77c7617",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const fireStorage = firebase.storage();
export const fireStore = firebase.firestore();

export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default app;
