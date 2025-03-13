import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithPopup, signInWithEmailAndPassword,signOut ,GoogleAuthProvider,updateProfile  } from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
import { app } from "../firebase/firebase.config.js";

const AuthProvider = ({children}) => {


    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser =(email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth,email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
    
      const updateProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }


    const logOut = ()=>{
      setLoading(true)
      return signOut(auth)
    }



useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
 
      setUser(currentUser)
      setLoading(false) 
  });

  return () => unsubscribe(); // cleanup function when component unmounts
},[])








    

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        updateProfile,
        logOut,
        
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
