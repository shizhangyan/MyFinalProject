import React from 'react'
import styled from 'styled-components';
function OtherInfo({formData, setFormData}) {

    return (
        <Container className="other-info-container">
            <GoalDiv>
                <Label>Country:</Label>
                <Input type="text" placeholder="Nationality..."
                    value={formData.country}
                    onChange={ (ev) => {
                        setFormData({...formData, country: ev.target.value})
                    }}            
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Other:</Label>
                <Input type="text" placeholder="Other..." 
                    value={formData.other}
                    onChange={ (ev) => {
                        setFormData({...formData, other: ev.target.value})
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
export default OtherInfo
