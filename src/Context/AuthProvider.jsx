'use client';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import AuthContext from "./AuthContex";
import auth from "@/Components/Firebase/Firebase";
import { useEffect, useState } from "react";


const googleProvide = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    

    const createUser = (email, password) => {
        

        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginuser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {

        return  signInWithPopup(auth, googleProvide)
    }

    const signoutuser = () => {
        

        return signOut(auth)
    }

    const updateuser = (updateedData) => {

        return updateProfile(auth.currentUser, updateedData)
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
        googlelogin,
        updateuser

    };

    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
