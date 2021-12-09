import React, { useState } from "react";
import styled from "styled-components";
import Meal from "./Meal";
import MealList from "./MealList";
import { useAuth0 } from "@auth0/auth0-react";

const GetData = () => {
    const { isAuthenticated } = useAuth0();

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    const handleChange = (ev) => {
        setCalories(ev.target.value);
    };
    const getMeadData = async () => {
        console.log("Get Data From Server");

        const res = await fetch(`/recipe/${calories}`);
        const json = await res.json();
        setMealData(json.data);
    };


    return (
        <>
        { isAuthenticated ?(
        <Wrapper>
            <SectionControl className="controls">
                <Input
                type="number"
                placeholder="Calories (e.g. 2000)"
                onChange={handleChange}
                />
                <Button onClick={getMeadData}>Get Daily Meal</Button>
                {mealData && <MealList mealData={mealData} />}
            </SectionControl>
            <Section className="meals">
                {mealData &&
                mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </Section>

            
        </Wrapper>):(
            <Div>
                You must login first!
            </Div>
        )}
        </>
    );
};
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    top: 90px;
    margin-left: 250px;
    width: 100% - 250px;
`;
const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #7f21eb;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: #6a0fd3;
    }
`;

const Input = styled.input`
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
`;
const Wrapper = styled.div`
    margin: 0;
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
