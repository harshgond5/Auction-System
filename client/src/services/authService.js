import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    getIdToken
} from "firebase/auth";

import { auth } from "../firebase/firebase";


// Signup
export const registerWithEmail = async (
    email,
    password
) => {
    try {const result =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

    return result.user;}
    catch (error) {

        console.error("SIGNUP ERROR CODE:", error.code);
        console.error("SIGNUP ERROR MESSAGE:", error.message);

        throw error;
    }
};


// Login
export const loginWithEmail = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        return result.user;

    } catch (error) {
        console.error("Firebase Login Error:", error);

        throw error;
    }
};

// Google Login
export const loginWithGoogle = async () => {

    const provider =
        new GoogleAuthProvider();

    const result =
        await signInWithPopup(
            auth,
            provider
        );

    return result.user;
};

export const syncUser = async(userData)=>{
    try{
        const user = auth.currentUser;
        if(!user){
            throw new Error("No Firebase user found");
        }

        const token = await user.getIdToken();
        
        // Use the environment variable, falling back to local for development
        const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

        const response = await fetch(
            `${API_URL}/users/sync`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(userData)
            }
        );

        const data = await response.json();
        return data;

    } catch(error){
        return {
            success:false,
            message:error.message
        };
    }
};

// Logout
export const logoutUser = async () => {

    await signOut(auth);

};


// Get Firebase Token
export const getFirebaseToken = async () => {

    const user = auth.currentUser;

    if(!user)
        return null;


    return await getIdToken(user);
};