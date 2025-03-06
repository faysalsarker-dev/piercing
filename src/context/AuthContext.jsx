/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   sendPasswordResetEmail,

// } from "firebase/auth";

// import app from "../config/firebase.config";
import { ContextData } from "./../utility/ContextData";

// const auth = getAuth(app);

const AuthContext = ({ children }) => {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);


//   // Create user with email and password
//   const createUser = async (email, password) => {
//     setLoading(true);
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     return userCredential;
//   };

//   // Sign user in with email and password
//   const signIn = async (email, password) => {
//     setLoading(true);
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential;
//   };
//   const reset = async (email) => {
//     setLoading(true);
//     const userCredential = await sendPasswordResetEmail(auth, email);;
//     return userCredential;
//   };



//   // Log out
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };





 
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
       

//         setLoading(false);
//       } else {
//         setLoading(false);
//         setUser(null);
      
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [user]);

//   const contextData = {
//     createUser,
//     signIn,
//     user,
//     logOut,
//     loading,
//     setLoading,
//     setUser,
//     reset
  
//   };

  const contextData = {
 user: null,
  
  };


  return (
    <ContextData.Provider value={contextData}>
      {children}
    </ContextData.Provider>
  );
};

export default AuthContext;
