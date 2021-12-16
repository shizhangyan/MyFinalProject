import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Ingredient from './Ingredient';

const RecipeDetails = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect( async ()=>{
        const res = await fetch(`/recipes/${id}`);
        const json = await res.json();
        setRecipeDetails(json.data);
    },[id]);

    const getImage = async (id) =>{
        const res = await fetch(`/mealimage/${id}`);
        const json = await res.json();
        setImage(json.image);
    }

    console.log(recipeDetails);

    return (
        <Wrapper>
            <H2>{recipeDetails?.title}</H2>
            <img src={recipeDetails?.image} />
            <H2>Ingredients Details</H2>
            <Grid>
            { recipeDetails &&
            <>
                {
                    recipeDetails.extendedIngredients.map((item)=>{
                        return < Ingredient meal={item} />;
                    })
                }
            </>}
        </Grid>
        </Wrapper>
    );
};
const H2 = styled.h2`
    margin: 20px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 10px;

    font-family: "roboto", sans-serif;
`;
export default RecipeDetails
