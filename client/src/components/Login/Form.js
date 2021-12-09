import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OtherInfo from './OtherInfo';
import PersonInfo from './PersonInfo';
import FirstGoal from './FirstGoal';

import { useAuth0 } from '@auth0/auth0-react';
import { initialState, activityOption, goalOption, gender,
        caloriesByMan, caloriesByWoman } from './Settings';
import { UserContext } from '../UserContext';

const Form = () => {
    const { user, isAuthenticated } = useAuth0();
    const { userData, setUserData } = useContext(UserContext);
    const [page, setPage] = useState(0);
    const FormTitles = ["What is your goal", "What is your activity level?", "About you"];
    const [formData, setFormData] = useState(initialState);
    const [confirmed, setConfirmed] = useState(false);

    formData.username = user.nickname;
    formData.email = user.email;
    formData.firstName = user.given_name;
    formData.lastName = user.family_name;

    const PageDisplay = () =>{
        if(page === 0){
            return <FirstGoal formData={formData} setFormData={setFormData} 
            goalOption = {goalOption} activityOption = {activityOption} gender = {gender}/>;
        } else if( page === 1){
            return <PersonInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };
    const calculateCalories = () =>{
        if( formData.gender === "Male" ){
            const theAgeArr = caloriesByMan.filter((item)=>{
                return ( formData.age >= item.ageRange[0] && formData.age <= item.ageRange[1]);
            });
            if( formData.activity === "Not very active"){
                formData.dailyCalorie = theAgeArr[0].calories[0];
                setFormData({...formData, dailyCalorie: theAgeArr[0].calories[0]});
            } else if( formData.activity === "Lightly Active"){
                formData.dailyCalorie = theAgeArr[0].calories[1];
                setFormData({...formData, dailyCalorie: theAgeArr[0].calories[1]});
            } else if( formData.activity === "Active"){
                formData.dailyCalorie = theAgeArr[0].calories[2];
                setFormData({...formData, dailyCalorie: theAgeArr[0].calories[2]});
            }
        }
    }
    const submitForm = () =>{
        calculateCalories();
        setUserData(formData);
        fetch("/user",{
            method: "POST",
            body:  JSON.stringify(formData),
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log("Success");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        !confirmed ? (
        isAuthenticated &&(
        <FormDiv className="form">
            <Progressbar className="progressbar">
                <div
                    style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}}
                >
                </div>
            </Progressbar>
            <FormContainer className="form-container">
                <Header className="header">
                    <h3>{FormTitles[page]}</h3>
                </Header>
                <Body className="body">{PageDisplay()}</Body>
                <Footer className="footer">
                    <Button 
                        disabled={page === 0}
                        onClick={()=>{
                            setPage((curPage)=>curPage - 1);
                            }}
                    >Prev</Button>
                    <Button 
                        // disabled={ page === FormTitles.length - 1}
                        onClick={ () =>{
                            if( page === FormTitles.length - 1){
                                // alert("Form Submitted!");
                                setConfirmed(true);
                                submitForm();
                            } else {
                                setPage((curPage) => curPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length -1 ? "Submit" : "Next"}
                    </Button>
                </Footer>
            </FormContainer>
        </FormDiv>)):(
            <>
            <h1>Your Daily Calorie is: {formData.dailyCalorie}</h1>
            </>
        )
    );
};
const Progressbar = styled.div`
    width: 33.33.%;
    height: 100%;
    background-color: rgb(98,0,255);
`;

const Header = styled.div`
    flex: 20%;
    display: grid;
    place-items: center;
`;

const Body = styled.div`
    flex: 60%;
`;

const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    border-radius: 7px;
    width: 100px;
    height: 40px;
    background-color: rgb(255,0,140);
    font-weight: bold;
    color: white;
    border: 0 none;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
    margin: 5px;
`;

const FormDiv = styled.div`
    top: 90px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;
const FormContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
`;

export default Form
