import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
function MyFridge() {
    const { isAuthenticated } = useAuth0();
    const [query, setQuery] = useState("");
    let history = useHistory();

    const handleClick = () =>{
        history.replace(`/searchfridge/${query}`)
    }
    return (
        <Wrapper>
            { isAuthenticated ? (
                <>
                <H2>My Fridge</H2> 
                <Div>
                    {/* <Label>Input what you have in your fridge: </Label> */}
                    <Input 
                        type="text" 
                        placeholder="what you have in your fridge" 
                        value={query}
                        onChange={ (ev) => {
                            setQuery(ev.target.value)
                        }}
                        />
                    <Button onClick={handleClick}>Search</Button>
                </Div>
                </>) :(
                    <Div>
                        <H2>You must login first!</H2>
                    </Div>
                )          
            }
        </Wrapper>
    );
};
const Button = styled.button`
    width: 150px;
    height: 44px;
    font-weight: bold;
    font-size: 25px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`;

const Label = styled.label`
    width: 200px;
    font-weight: bold;
`;
const Input = styled.input`
    margin: 5px;
    width: 550px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
    border-radius: 3px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
const H2 = styled.h2`
    margin-top: 10px;
`;
const Wrapper = styled.div`
    top: 90px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;
export default MyFridge
