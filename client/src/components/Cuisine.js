import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { countryCuisine } from '../components/Login/Settings'
import Pagination from './Pagination';
import ListingGrid from './ListingGrid';
import { useAuth0 } from '@auth0/auth0-react';

function Cuisine() {
    const { isAuthenticated } = useAuth0();
    const [country, setCountry] = useState(null);
    const [cuisine, setCuisine] = useState(null);
    const [status, setStatus] = useState("loading");

    const getCuisine = async () =>{
        if( country ){
            await fetch(`/recipe/bycuisine/${country}`)
            .then((res)=> res.json())
            .then((data)=>{
                setCuisine(data.data.results);
                console.log(cuisine);
                setStatus("idle");
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };

    useEffect(() => {
        getCuisine();
    }, [country]);

    if( country && cuisine ){
        console.log(cuisine);
    }

    return (
        <Wrapper>
            { isAuthenticated ?
            (<>
            <Div>
                <Label>Select Cuisine: </Label>
                <Select
                    value={country}
                    onChange={(ev)=> setCountry(ev.target.value)}
                >
                    {
                        countryCuisine.map((opt)=>(
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))
                    }
                </Select>
                { cuisine &&(
                // <Container>
                    <Pagination 
                        data={cuisine}
                        RenderComponent={ListingGrid}
                        dataLimit ={20}
                    />

                )}
            </Div>
            </>):(
                <Div>
                    <H2>You must login first!</H2>
                </Div>
            )}
        </Wrapper>
    );
};
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 88%;
`;

const Button = styled.button`
    height: 40px;
    weight: 160px;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
    }
`;
const H2 = styled.h2`
    margin-top: 10px;
`;
const Label = styled.label`
    width: 120px;
    font-weight: bold;
`;

const Select = styled.select`
    margin: 5px;
    width: 260px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
    border-radius: 3px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const Wrapper = styled.div`
    /* top: 20px; */
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export default Cuisine
