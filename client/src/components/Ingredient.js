import React from "react";
import styled from "styled-components";

const Ingredient = ({meal}) =>{

    return(
        <ItemBox>
            <Image src={`https://spoonacular.com/cdn/ingredients_100x100/${meal.image}`} alt="recipe" />
            <TextDiv>
                <ItemName>{meal.name}</ItemName>
                <ItemName>{meal.original}</ItemName>
            </TextDiv>
        </ItemBox>
    );
};
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-content: space-between;
    margin-bottom: 30px;
    text-decoration: none;
    color: black;
    padding: 20px;
    border-radius: 10px;
    font-family: "roboto", sans-serif;
    height: 100%;
`;

const Image = styled.img`
    margin-bottom: 20px;
    border-radius: 10px;
    width: 200px;
    height: 200px;
`;

const ItemName = styled.span`
    text-align: center;
    margin-bottom: 20px;
    color: #383838;
    font-weight: bold;
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
export default Ingredient;