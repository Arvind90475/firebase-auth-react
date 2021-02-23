import React, {
  useContext,
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";

import { auth, provider } from "../firebase";

import { reducer } from "../reducers/auth.reducer";
import { actionTypes } from "../reducers/auth.reducer";

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
  const initialState = {
    currentUser: null,
  };

  const [user, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: actionTypes.setCurrentUser, payload: user });
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    registerUser,
    loginUser,
    googleLogin,
    logout,
    dispatch,
  };
  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
}
