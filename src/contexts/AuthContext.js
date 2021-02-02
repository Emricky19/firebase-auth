import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = (emailAddress) => auth.sendPasswordResetEmail(emailAddress)

  const updateEmail = (email) => currentUser.updateEmail(email)
  const updatePassword = (password) => currentUser.updatePassword(password)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
