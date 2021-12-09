import React, { createContext, useEffect, useState } from "react";

export const  DataContext = createContext(null);

export const DataContextProvider = ({children}) =>{
    const calories = 2000;
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect( async ()=>{
        const response = await fetch(`/test/${calories}`);
        const json = await response.json();
        setData(json);
    },[])
    if( data ){
        console.log(data);
        console.log(data.data.nutrients, data.data.meals);
    }

    return (
        <DataContext.Provider value ={{
            data:data,
            status: status,
            setStatus: setStatus,
            setData: setData,
        }}>
            {children}
        </DataContext.Provider>
    )
}