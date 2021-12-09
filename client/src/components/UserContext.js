import React, { createContext, useState } from 'react'

export const UserContext = createContext(null);

export const UserProvider = ({children}) =>{
    const [existUser, setExistUser] = useState(false);
    const [ userData, setUserData ] = useState(null);
    return (
        <UserContext.Provider value={{
            existUser: existUser,
            setExistUser: setExistUser,
            userData: userData,
            setUserData: setUserData,
        }}>
            {children}
        </UserContext.Provider>
    )
}
