import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            console.log(user)
        });

        //if you are listening a real time operation the do the clean up as it will cause memory leaking
        return () => {
            unsub();
        }
    },[]);

    return (
        <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    //it means this children component caries this currentUser
    //any component which is wrapped with this AuthContextProvider will be able to reach currentUser
    )

}