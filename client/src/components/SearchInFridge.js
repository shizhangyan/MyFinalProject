import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function SearchInFridge() {
    const { query } = useParams();
    const [recipes, setRecipes] = useState(null);
    useEffect( async ()=>{
        const res = await fetch(`/recipe/byingredients/${query}`);
        const json = await res.json();
        setRecipes(json.data);
    },[]);
    console.log(recipes);
    return (
        <Wrapper>
            
            {
                recipes?.map((recipe)=>{
                    return (<Container><>   
                    <Div1>
                    <h5>{recipe.title}</h5>
                    <Image src={recipe.image} alt={recipe.id} />
                    </Div1>
                    <Div3>
                    <h4>Missed Ingredients: {recipe.missedIngredientCount}</h4>
                    {recipe.missedIngredients.map((item)=>{
                        return(<>
                            <img src={item.image} alt={item.name} />
                            <p>{item.original}</p>
                        </>)
                        })
                    }</Div3>
                    <Div2>
                    <h4>Unused Ingredients: {recipe.unusedIngredients?.length}</h4>
                    {   recipe.unusedIngredients?.length > 1 && 
                        (recipe.unusedInngredients?.map((item)=>{
                            return(
                                <>
                                    <img src={item.image} alt={item.id} />
                                    <p>{item.name}</p>
                                </>
                            )
                        }))
                    }
                    {
                        recipe.unusedIngredients?.length === 1 &&
                        (   <>
                            <img src={recipe.unusedIngredients[0].image} />
                            <p>{recipe.unusedIngredients[0].name}</p>
                            </>)
                    }
                    </Div2>
                    <Div4>
                    <h4>Used Ingredients: {recipe.usedIngredidentCount}</h4>
                    {
                        recipe.usedIngredients.map((item)=>{
                            return(
                                <>
                                    <p>{item.name}</p>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.original}</p>
                                </>
                            )
                        })
                    }
                    </Div4>
                    </></Container>)
                })
            }
            
        </Wrapper>
    );
};
const Div1 = styled.div`
    padding: 10px;
    width: 300px;
    height:  200px;
    margin: 10px 10px;
`;
const Div2 = styled.div`
    margin: 50px 10px;
    padding: 10px;
    width: 300px;
    height: 200px;

`;
const Div3 = styled.div`
    margin: 50px 10px;
    padding: 10px;
    width: 300px;
    height: 400px;
`;
const Div4 = styled.div`
    margin: 50px 10px;
    padding: 10px;
    width: 300px;
    height: 300px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
const Image = styled.img`
    width: 300px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33%;
`;
export default SearchInFridge
