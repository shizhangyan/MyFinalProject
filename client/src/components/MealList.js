import React from "react";
import styled from "styled-components";

const MealList = ({mealData}) =>{
    const nutrients = mealData.nutrients;
    return (
        <Main>
            <Section className="nutrients">
                <H1>Macros</H1>
                <UL>
                <li>Calories: {nutrients?.calories.toFixed(0)}</li>
                <li>Carbohydrates: {nutrients?.carbohydrates}</li>
                <li>Fat: {nutrients?.fat}</li>
                <li>Protein: {nutrients?.protein}</li>
                </UL>
            </Section>
        </Main>
    );
};
const UL = styled.ul`
    display: flex;
    width: 35rem;
    justify-content: space-evenly;
    list-style: none;
`;

const Section = styled.section`
    margin: 2rem 0 1rem 0;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const H1 = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`;


export default MealList;