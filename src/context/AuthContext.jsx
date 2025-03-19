
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,

} from "firebase/auth";


import { ContextData } from "./../utility/ContextData";
import app from './../config/firebase.config';

const auth = getAuth(app);

const AuthContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Sign user in with email and password
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };






  const resetPassword = async (email) => {
    try {
      setLoading(true);
      const reset = await sendPasswordResetEmail(auth, email);
      return reset;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };


  const reset = async (email) => {
    setLoading(true);
    const userCredential = await sendPasswordResetEmail(auth, email);;
    return userCredential;
  };



  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };





 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
       

        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const contextData = {
    resetPassword,
    signIn,
    user,
    logOut,
    loading,
    setLoading,
    setUser,
    reset
  
  };




  return (
    <ContextData.Provider value={contextData}>
      {children}
    </ContextData.Provider>
  );
};

export default AuthContext;
