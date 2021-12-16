import { useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState, useEffect } from 'react'
export const UserContext = createContext(null);

export const UserProvider = ({children}) =>{
    const { user, isLoading, isAuthenticated } = useAuth0();
    const [existUser, setExistUser] = useState(false);
    const [ userData, setUserData ] = useState(null);
    const [enableButton, setEnableButton] = useState(false);
    const [ dailyMealInfo, setDailyMealInfo ] = useState(null);
    const [ dailyMeal, setDailyMeal ] = useState({
                username: "",
                calories:0,
                fat: 0,protein: 0,carbohydrates: 0,
                meals:[ {id: 0, image:"", readyInMinutes: 0, servings: 0, sourceUrl: "", title:""},
                        {id: 0, image:"", readyInMinutes: 0, servings: 0, sourceUrl: "", title:""},
                        {id: 0, image:"", readyInMinutes: 0, servings: 0, sourceUrl: "", title:""}]});

                    
    const getUserInformation = async () =>{
        {
            await fetch(`/user/${user?.nickname}`)
            .then((res)=> res.json())
            .then((data)=>{
                if(data.success){
                    setUserData(data.data);
                    console.log("The user already exist!");
                    setExistUser(true);
                } else{
                    setExistUser(false);
                    console.log("This is a new user")
                }
                    // setStatus("idle");
            })
            .catch((err)=>{
                setExistUser(false);
                console.log("New User")
            })             
        }
    };
                    
    useEffect(()=>{
        getUserInformation();
    },[isAuthenticated]);
                    
    return (
        <UserContext.Provider value={{
            existUser: existUser,
            setExistUser: setExistUser,
            userData: userData,
            setUserData: setUserData,
            dailyMeal: dailyMeal,
            setDailyMeal: setDailyMeal,
            dailyMealInfo: dailyMealInfo,
            setDailyMealInfo: setDailyMealInfo,
            enableButton: enableButton,
            setEnableButton: setEnableButton,
        }}>
            {children}
        </UserContext.Provider>
    )
}
