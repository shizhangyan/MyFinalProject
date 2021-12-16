import React, { useContext, useState } from "react";
import styled from "styled-components";
import Meal from "./Meal";
import MealList from "./MealList";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";

const GetData = () => {
    const { isAuthenticated } = useAuth0();
    const { userData, dailyMeal, setDailyMeal,enableButton, setEnableButton } = useContext(UserContext);
    // const [ enableButton, setEnableButton] = useState(false);

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    // console.log(dailyMeal);
    const handleChange = (ev) => {
        setCalories(ev.target.value);
    };
    // console.log(userData.username);
    // get meal data from server
    const getMealData = async () => {
        console.log("Get Data From Server");

        const res = await fetch(`/recipe/${calories}`);
        const json = await res.json();
        setMealData(json.data);
        const { nutrients, meals } = json.data;
        // console.log(nutrients);
        dailyMeal.username = userData.username;
            // usrname: userData?.username,
        setDailyMeal({...dailyMeal, 
            calories:nutrients?.calories, 
            protein:nutrients?.protein, 
            fat: nutrients?.fat, 
            carbohydrates: nutrients?.carbohydrates});
        setEnableButton(true);
    };
    // save daily meal data to database
    const saveMealData = () => {
        // console.log(dailyMeal);
        // console.log("Save Daily Meal");
        if(!mealData){
            alert("Get Daily Meal First");
        }
        // console.log(dailyMeal);
        fetch("/api/dailymeal",{
            method: "POST",
            body:  JSON.stringify(dailyMeal),
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
        setEnableButton(false);    
    };
    // console.log(mealData);
    // console.log(dailyMeal);
    return (
        <>
        { isAuthenticated ?(
        <Wrapper>
            <SectionControl className="controls">
                <Input
                type="number"
                placeholder={`${userData?.dailyCalorie}`}
                onChange={handleChange}
                />
                <ButtonContainer>
                    <Button onClick={getMealData}>Get Daily Meal</Button>
                    <Button disabled={!enableButton} onClick={saveMealData}  >Save Daily Meal</Button>
                </ButtonContainer>
                {mealData && <MealList mealData={mealData} />}
            </SectionControl>
            <Section className="meals">
                {mealData &&
                mealData.meals?.map((meal, index) => {
                    return <Meal key={meal.id} meal={meal} dailyMeal={dailyMeal.meals[index]}/>;
                })}
            </Section>
        </Wrapper>):(
            <Div>
                <H2>You must login first!</H2>
            </Div>
        )}
        </>
    );
};
const Div = styled.div`
    display: flex;
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
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #7f21eb;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    margin: 0 10px;
    &:hover {
        cursor: pointer;
        background-color: #6a0fd3;
    };
    &:disabled {
        background-color: #a8a8a8;
    }
`;
const Button1 = styled.button`
    padding: 0.5rem 1rem;
    background-color: #7f21eb;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    margin: 0 10px;
    &:hover {
        cursor: pointer;
        background-color: #6a0fd3;
    }
    &:disabled {
        background-color: #a8a8a8;
    }
`;
const Input = styled.input`
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
`;
const Wrapper = styled.div`
    margin-left: 0px;
    padding: 0;
    font-family: "Roboto", sans-serif;
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const SectionControl = styled.section`
    margin: 2rem 0 1rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Section = styled.section`
    margin: 2rem 0 1rem 0;
    display: flex;
`;

export default GetData;
