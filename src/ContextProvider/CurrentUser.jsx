import React, {createContext, useEffect, useRef, useState} from "react";
import {auth} from "../api/firebase-config.js";
import { onAuthStateChanged } from 'firebase/auth';
import {useCookies} from "react-cookie";

export const CurrentUserContext = createContext({});

function CurrentUserProvider({children}) {
    const [CurrentUser, setCurrentUser] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['authentication-token']);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // User is signed in
                console.log("User is signed in with Google:", currentUser);
                setCurrentUser(currentUser);
            } else {
                removeCookie("authentication-token")
                console.log("No user is signed in.");
                setCurrentUser(null);
            }
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, []);



    return (
        <CurrentUserContext.Provider value={
            {
                CurrentUser
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export default CurrentUserProvider;