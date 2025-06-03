import React, { createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const dresses = [
        {name: "Panjabi"},
        {name: "Pajama"}
    ];

    const authInfo = {
        dresses,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
