import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from '../pages/firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { createUser, GoogleLogin, signIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;