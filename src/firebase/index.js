import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_.apiKey,
  authDomain: process.env.REACT_APP_.authDomain,
  databaseURL: process.env.REACT_APP_.databaseURL,
  projectId: process.env.REACT_APP_.projectId,
  storageBucket: process.env.REACT_APP_.storageBucket,
  messagingSenderId: process.env.REACT_APP_.messagingSenderId,
  appId: process.env.REACT_APP_.appId,
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
