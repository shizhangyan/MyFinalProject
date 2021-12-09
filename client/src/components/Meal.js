import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Meal = ({meal}) =>{
    const [ imageUrl, setImageUrl ] = useState("");
    useEffect( async ()=>{
        const res = await fetch(`/mealimage/${meal.id}`);
        const json = await res.json();

        setImageUrl(json.image);
    },[meal.id]);
    return(
        <Article>
            <h5>{meal.title}</h5>
            <Img src={imageUrl} alt="recipe" />
            <UL>
                <li>Preparation time: {meal.readyInMinutes}</li>
                <li>Number of Servings: {meal.servings}</li>
            </UL>
            <A href={meal.sourceUrl}>Go to Recipe</A>
        </Article>
    );
};
const UL = styled.ul`
    font-size: 0.9rem;
    margin-bottom: 1rem;
`;
const A = styled.a`
    align-items: center;
    text-decoration: none;
    background-color: #7f21eb;
    color: #f3f3f3;
    width: fit-content;
    padding: 0.5rem 1rem;
    &:hover{
        cursor: pointer;
        background-color: #6a0fd3;
    }
`;

const Article = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    margin: 0 1rem;
    max-width: 18rem;
    box-shadow: 0 4px 8px 2px rgba(77,77,77, 0.15);
`;

const Img = styled.img`
    width: 250px;
    margin-bottom: 1rem;
`;
// @media only screen and (max-width: 550){
//     .meals {
//         flex-direction: colomn;
//         align-items:: center;
//     }
//     .nutrients ul{
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         width: 100%;
//     }
// }
export default Meal;