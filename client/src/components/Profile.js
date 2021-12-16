import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { goalOption, activityOption, initialState } from '../components/Login/Settings'

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    const [profile, setProfile] = useState(initialState);

    console.log(user?.email);
    useEffect(()=>{
        fetch(`/user/email/${user?.email}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data.data);
            setProfile(data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    const handleClick = () =>{
        // "/user/updateuser"
        fetch(`/user/updateuser/${profile._id}`,{
            method: "PATCH",
            body: JSON.stringify(profile),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res)=> res.json())
        .then((data) =>{
            if(data.status === 201 ){
                console.log(data);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    console.log(profile);
    return (
        <Container>
        { isAuthenticated ? (
            <>
            <H2>Profile</H2>
            <GoalDiv>
                <Label>Username:</Label>
                <Input type="text" value={profile?.username} disabled />
            </GoalDiv>
            <GoalDiv>
                <Label>FirstName: </Label>
                <Input type="text" value={profile?.firstName} disabled />
            </GoalDiv>
            <GoalDiv>
                <Label>LastName:</Label>
                <Input type="text" value={profile?.lastName} disabled />
            </GoalDiv>
            <GoalDiv>
                <Label>Email:</Label>
                <Input type="text" value={profile?.email} disabled />
            </GoalDiv>
            <GoalDiv>
                <Label>Gender:</Label>
                <Input type="text" value={profile?.gender} disabled />
            </GoalDiv>
            <GoalDiv>
                <Label>Age:</Label>
                <Input type="text" value={profile?.age}
                onChange={ (ev) =>{
                    setProfile({...profile, age:ev.target.value})
                }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Weight:</Label>
                <Input type="text" value={profile?.weight}
                onChange={ (ev) =>{
                    setProfile({...profile, weight:ev.target.value})
                }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Goal:</Label>
                <Select value={profile?.goal}
                onChange={(ev)=> setProfile({...profile, goal: ev.target.value})}
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
                <Select value={profile?.activity}
                onChange={(ev)=> setProfile({...profile, activity: ev.target.value})}
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
                <Label>Address:</Label>
                <Input type="text" value={profile?.address}
                onChange={ (ev) =>{
                    setProfile({...profile, address:ev.target.value})
                }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Postcode:</Label>
                <Input type="text" value={profile?.postcode}
                onChange={ (ev) =>{
                    setProfile({...profile, postcode:ev.target.value})
                }}
                />
            </GoalDiv>
            <GoalDiv>
                <Label>Country:</Label>
                <Input type="text" value={profile?.country}
                onChange={ (ev) =>{
                    setProfile({...profile, country:ev.target.value})
                }}
                />
            </GoalDiv>
            <Button onClick={handleClick}>Modify</Button>
        </>
        ):(
            <Div>
                <H2>You must login first!</H2>
            </Div>
        )}        
        </Container> 

    );
};
const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    top: 90px;
    margin-left: 0px;
    width: 100%;
`;
const H2 = styled.h2`
    margin-top: 10px;
`;
const Button =styled.button`
    width: 120px;
    height: 30px;
    background: #f5f5f5;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        color: red;
    }
`;

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
    height: 30px;
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
    height: 30px;
    padding-left: 5px;
    font-size: 20px;
    border-radius: 3px;
`;

const Span = styled.span`
    margin-left: 16px;
    color: #050505;
`;

export default Profile
