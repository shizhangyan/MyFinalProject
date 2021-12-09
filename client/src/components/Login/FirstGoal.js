import React from 'react'
import styled from 'styled-components';

const FirstGoal = ({formData, setFormData, goalOption, activityOption, gender}) => {

    return (
        <Container>
            <GoalDiv>
            <Label>Goal:</Label>
            <Select value={formData.goal}
                onChange={(ev)=> setFormData({...formData, goal: ev.target.value})}
            >
                {
                    goalOption.map((opt)=>(
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))
                }
            </Select>
            </GoalDiv>
            <GoalDiv>
            <Label>Activity:</Label>
            <Select value={formData.activity}
                onChange={(ev)=> setFormData({...formData, activity: ev.target.value})}
            >
                {
                    activityOption.map((opt)=>(
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))
                }
            </Select>
            </GoalDiv>

            <GoalDiv>
                <Label>Gender:</Label>
                <Select value={formData.gender}
                onChange={(ev)=> setFormData({...formData, gender: ev.target.value})}
            >
                {
                    gender.map((opt)=>(
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))
                }
            </Select>
            </GoalDiv>
            <GoalDiv>
            <Label> Age: </Label>
            <Input 
                type="text" 
                placeholder="email..." 
                value={formData.age}
                onChange={ (ev) => {
                    setFormData({...formData, age: ev.target.value})
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

const Select = styled.select`
    margin: 5px;
    width: 260px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
    border-radius: 3px;
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

export default FirstGoal;
