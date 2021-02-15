import React, { useContext, createContext, useState, useEffect } from "react";

import { auth, provider } from "../firebase";

const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const googleLogin = () => {
  return auth.signInWithPopup(provider);
};

const logout = () => {
  return auth.signOut();
};
export const Authcontext = createContext();

export const useAuthContext = () => useContext(Authcontext);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    registerUser,
    loginUser,
    googleLogin,
    logout,
  };
  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
}
