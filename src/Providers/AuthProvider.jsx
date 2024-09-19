import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../init.config";
import {signInWithEmailAndPassword } from "firebase/auth/web-extension";


 export const AuthContext=createContext(null);

 const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const googleProvider=new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // for register or sign up 
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    // for sign in or login
    const signUser=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }



    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }


    // observe the auth state 

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('Current value of the current user',currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo={user,loading,createUser,signUser,logOut,signInWithGoogle};

    return (
        
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children: PropTypes.node
}
