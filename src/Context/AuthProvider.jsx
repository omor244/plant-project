'use client';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AuthContext from "./AuthContex";
import auth from "@/Components/Firebase/Firebase";
import { useEffect, useState } from "react";
import { information } from "@/proxy";
// import { useState } from "react";


const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    

    const createUser = (email, password) => {
        

        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginuser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const signoutuser = () => {
        

        return signOut(auth)
    }

    useEffect(() => {
         
        const unsubscriobe = onAuthStateChanged(auth, (currentuser) => {
            
            setuser(currentuser)
        })


        return () => {
            unsubscriobe()
        }
     },[])

    const userinfo = {
      
        createUser,
        loginuser,
        signoutuser, 
        user,

    };

    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
