import React from 'react'
import styled from 'styled-components';
// import { useAuth0 } from "@auth0/auth0-react"

function PersonInfo({formData, setFormData}) {

    return (
        <Container className="personal-info-container">
            <GoalDiv>
                <Label>Weight: </Label>
                <Input type="text" placeholder="Weight..." 
                    value={formData.weight}
                    onChange={ (ev) => {
                    setFormData({...formData, weight: ev.target.value})
                    }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Address</Label>
                <Input type="text" placeholder="Address..."
                    value={formData.address}
                    onChange={ (ev) => {
                        setFormData({...formData, address: ev.target.value})
                    }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Postcode:</Label>
                <Input type="text" placeholder="Postcode..." 
                    value={formData.postcode}
                    onChange={ (ev) => {
                        setFormData({...formData, postcode: ev.target.value})
                    }}            
                />
            </GoalDiv>
        </Container>
    );
};
const GoalDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Label = styled.label`
    width: 80px;
    font-weight: bold;
    /* align-items: center; */
`;
const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    margin: 5px;
    width: 250px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
    border-radius: 3px;
`;

export default PersonInfo
