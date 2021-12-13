import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Form from "./Login/Form";
import LoadingSpinner from "./LoadingSpinner";
import { UserContext } from "./UserContext";

const HomePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { existUser, setExistUser, userData, setUserData } = useContext(UserContext);
    const [status, setStatus] = useState("loading");

    const getUserInformation = () =>{
        if( user ){
            fetch(`/user/${user?.nickname}`)
            .then((res)=> res.json())
            .then((data)=>{
                if(data.success){
                    setExistUser(true);
                    setUserData(data.data);
                    console.log("The user already exist!");
                } else{
                    setExistUser(false);
                    console.log("This is a new user")
                }
                setStatus("idle");
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

    if( isLoading && status === "loading"){
        return <LoadingSpinner />
    }

    return(
        <>
            { isAuthenticated ? (
            <Div>
                {/* <h1>Welcome to my HomePage</h1> */}
                { !existUser && status ==="idle" ?(
                    <Form />
                ):( 
                    existUser && status === "idle" ? (
                        <>
                            <Content>
                            <H2>According your information, </H2><br/>
                            <H2>Your Daily Calorie is: {userData.dailyCalorie}.</H2>
                                <H2>Please select your daily plan</H2>
                            </Content>
                        </>
                        ):(<></>)
                        )}
            </Div>):(
                <Div>
                    <h1>You must login first.</h1>
                </Div>
            )}
        </>
    );
};
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-top: 150px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    top: 90px;
    margin-left: 0px;
    width: 100%;
`;
const H2 = styled.h2`
    margin-top: 10px;
`;

export default HomePage;