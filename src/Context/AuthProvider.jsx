import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // LOADER
  const [loading, setLoading] = useState(true);
  // GET CURRENT USER
  const [getCurrentUser, setGetCurrentUser] = useState(null);
  //console.log(getCurrentUser);

  // Create user with Google 
const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider); 
}; 

  // CREATE USER
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // FUNCTION FOR SIGN IN
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // FUNCTION FOR LOG OUT
  const logOut = () => {
    return signOut(auth);
  };
  // FUNCTION FOR GETTING THE CURRENTLY SIGNED-IN OR LOGGED-IN USER
  useEffect(() => {
    const Subscribe = onAuthStateChanged(auth, (currentUser) => {
      setGetCurrentUser(currentUser);
      setLoading(false);
    });
    return () => Subscribe();
  }, []);

  //FUNCTION FOR UPDATING THE USER
  const updateUser = (updatingUser) => {
    return updateProfile(auth.currentUser, updatingUser);
  };
  //console.log(getCurrentUser, "line 33");

  const authInfo = {
    googleSignIn,
    createUser,
    signIn,
    updateUser,
    getCurrentUser,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
