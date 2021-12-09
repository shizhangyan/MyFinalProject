import React from "react";
import styled from "styled-components";
import Login from "./Login/Login";
import Logout from "./Login/Logout";
import Logo from "../assets/logo.png"
import BackgroundImg from "../assets/mealplan.jpg"

const Header = () =>{

    return(
        <Wrapper>
            <LogoImg src={Logo} />

            <RightNavGroup>
                <Login />
                <Logout />
            </RightNavGroup>
        </Wrapper>
    );
};
const LogoImg = styled.img`
    height: 78px;
    width: auto;
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100% ;
    background: #060b26;
    color: #fff;
    font-family: "roboto", sans-serif;
    /* position: sticky; */
    background-image: url(${BackgroundImg});
    background-size: auto;
    /* background-repeat: round; */
    top: 0;
    z-index: 50;
    padding: 5px 50px;
    margin-left: 0px;
    margin-bottom: --90px;
`;

const RightNavGroup = styled.div`
    display: flex;
    justify-content: space-between;

`;



export default Header;