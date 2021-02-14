import React, { useContext, createContext } from "react";

import { auth } from "../firebase";

function registerUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export const Authcontext = createContext();

export const useAuthContext = () => useContext(Authcontext);

export default function AuthProvider({ children }) {
  const value = {
    loginUser,
    registerUser,
  };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
}
