import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, passsword) => {
        return createUserWithEmailAndPassword(auth, email, passsword)
    }

    const loginUser = (email, passsword) => {
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    } 

    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    } ,[])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        updateUserProfile,
        loginUser,
        logoutUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;