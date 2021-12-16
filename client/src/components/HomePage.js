import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Form from "./Login/Form";
import LoadingSpinner from "./LoadingSpinner";
import { UserContext } from "./UserContext";

const HomePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { existUser, setExistUser, userData, setUserData, dailyMealInfo, 
            enableButton, setEnableButton,setDailyMealInfo } = useContext(UserContext);
    const [status, setStatus] = useState("loading");
    // const [enableButton, setEnableButton] = useState(false);
    // const [dailyMealInfo, setDailyMealInfo] = useState(null);

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
    const getDailyMealInfo = () =>{
        if( existUser ){
            fetch("/api/dailymeal/")
            .then((res) => res.json())
            .then((data)=>{
                setDailyMealInfo(data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };

    useEffect(()=>{
        getUserInformation();
        getDailyMealInfo();
    },[isAuthenticated]);

    if( isLoading && status === "loading"){
        return <LoadingSpinner />
    }

    const handleClick = (index) =>{
        fetch("/api/dailymeal",{
            method: "POST",
            body:  JSON.stringify(theArr[index]),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log("Success");
        })
        .catch((err)=>{
            console.log(err);
        }) 
        setEnableButton(true);
    };

    const len = dailyMealInfo?.length;
    let theArr = [];
    if( dailyMealInfo !== null ){
        theArr.push(dailyMealInfo[len-3]);
        theArr.push(dailyMealInfo[len-2]);
        theArr.push(dailyMealInfo[len-1]);
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
                            <H4>According your information, Your Daily Calorie is: {userData.dailyCalorie}.</H4>
                                <H4>Your recent 3 Day's Meal Plan is: </H4>
                            </Content>
                            <Wrapper>
                                {   theArr?.map((item,index) =>{
                                return(
                                <Container>
                                    <Button onClick={()=>handleClick(index)} disabled={enableButton}>Choose Again</Button>
                                    <NutriDiv>
                                        <ItemName>Calories: {item?.calories}</ItemName>
                                        <ItemName>Carbohyd: {item?.carbohydrates}</ItemName>
                                        <ItemName>Fat: {item?.fat}</ItemName>
                                        <ItemName>Protein: {item?.protein}</ItemName>
                                    </NutriDiv>
                                    {                                        
                                    item.meals.map((meal)=>{
                                        return(
                                        <MealDiv>
                                            <Image src={meal?.image} alt={meal?.title} />
                                            <Title>{meal.title}</Title>
                                            <ItemName>readyInMinutes:{meal?.readyInMinutes}</ItemName>
                                            <ItemName>servings:{meal?.servings}</ItemName>                                            
                                        </MealDiv>)
                                    })}
                                </Container>   )                             
                            })                            
                            }</Wrapper>
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
const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #7f21eb;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    margin: 10px 10px;
    margin-left: 150px;
    &:hover {
        cursor: pointer;
        background-color: #6a0fd3;
    };
    &: disabled {
        background-color: #a8a8a8;
    }
`;
const Title = styled.div`
    width: 100%;
    height: 100px;
    font-weight: bold;
    color: #383838;
`;

const ItemName = styled.span`
    text-align: center;
    margin-bottom: 5px;
    color: #383838;
    font-weight: bold;
`;
const P = styled.p`
    width: 33%;
`;

const Image = styled.img`
    width: 300px;
`;
const NutriDiv = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const MealDiv = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33%;
`;
const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    margin: 10px 0;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    top: 90px;
    margin-left: 0px;
    width: 100%;
`;
const H4 = styled.h3`
    margin: 5px 0;
    color: red;
`;

export default HomePage;