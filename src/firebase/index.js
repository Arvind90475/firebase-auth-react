import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhsKQlNBUGwc6LguB1NsCzSrvve3mWwqw",
  authDomain: "react-auth-56a8f.firebaseapp.com",
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

export default app;
