import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Form from "./Login/Form";
import LoadingSpinner from "./LoadingSpinner";
import { UserContext } from "./UserContext";

const HomePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { existUser,status, userData, enableButton, setEnableButton,setDailyMealInfo } = useContext(UserContext);

    const [recentDailyMeal, setRecentDailyMeal] = useState(null);

    let theArr = [];
    console.log(userData?.username);

    const getDailyMealInfo = async () =>
    {
        {                     
            console.log(userData?.username);
            await fetch(`/api/dailymeal/${userData?.username}`)
            .then((res) => res.json())
            .then((data)=>{
                setDailyMealInfo(data.data);                                                                                                        
                console.log(data);
                if( data.data !== []){
                    let len = 0;
                    for(let i = data.data.length - 1; i >= 0; i--){
                        theArr.push(data?.data[i]);
                        len += 1;
                        if( len === 3) break;
                    }
                    // theArr.push(data?.data[len-3]);
                    // theArr.push(data?.data[len-2]);
                    // theArr.push(data?.data[len-1]);    
                    setRecentDailyMeal(theArr);                     
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    useEffect(()=>{
        getDailyMealInfo();
    },[existUser]);

    if( isLoading ){
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
    console.log("Exist User ? ", existUser);
    console.log(recentDailyMeal);
    return(
        <>
            { isAuthenticated ? (
            <Div>
                {/* <h1>Welcome to my HomePage</h1> */}
                { !existUser ?(
                    <Form />
                ):( 
                    recentDailyMeal !== null ? (
                        <>
                            {   recentDailyMeal.length !== 0 ?(
                                <Content>
                                    <H4>According your information, Your Daily Calorie is: {userData.dailyCalorie}.</H4>
                                    <H4>Your recent {recentDailyMeal.length} Day's Meal Plan is: </H4>                            
                                </Content>
                            ):(
                                <Content>
                                <H4>According your information, Your Daily Calorie is: {userData.dailyCalorie}.</H4>
                                <H4>Please start choosing your daily plan.</H4>
                                </Content>
                            )}
                            <Wrapper>
                                {   recentDailyMeal?.map((item,index) =>{
                                return(
                                <Container len ={recentDailyMeal.length}>
                                    <NutriDiv>
                                        <ItemName>Calories: {item?.calories.toFixed(2)}</ItemName>
                                        <ItemName>Carbohyd: {item?.carbohydrates.toFixed(2)}</ItemName>
                                        <ItemName>Fat: {item?.fat.toFixed(2)}</ItemName>
                                        <ItemName>Protein: {item?.protein.toFixed(2)}</ItemName>
                                    </NutriDiv>
                                    {                                        
                                    item?.meals.map((meal)=>{
                                        return(
                                        <MealDiv>
                                            <Image src={meal?.image} alt={meal?.title} />
                                            <Title>{meal.title}</Title>
                                            <ItemName>readyInMinutes:{meal?.readyInMinutes}</ItemName>
                                            <ItemName>servings:{meal?.servings}</ItemName>                                            
                                        </MealDiv>)
                                    })}
                                    <Button onClick={()=>handleClick(index)} disabled={enableButton}>Choose Again</Button>
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
    margin-left: 100px;
    &:hover {
        cursor: pointer;
        background-color: #6a0fd3;
    };
    &:disabled {
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

const Image = styled.img`
    width: 300px;
`;
const NutriDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin: 20px;
`;

const MealDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    /* width: 33%; */
    width: ${(props) =>( props.len === 1 ? "100%" : props.len === 2 ? "50%" : "33%")};
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