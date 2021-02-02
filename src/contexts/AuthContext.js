import React, { createContext, useState, useEffect, useContext } from 'react'
import { auth } from '../config/firebase'

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth, }
