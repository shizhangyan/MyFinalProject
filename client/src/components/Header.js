import React from "react";
import { Link  } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login/Login";
import Logout from "./Login/Logout";
import Logo from "../assets/logo.png"
import BackgroundImg from "../assets/mealplan.jpg"


const Header = () =>{

    return(
        <>
        <Wrapper>
            <LogoImg src={Logo} />
            <RightNavGroup>
                <Login />
                <Logout />
            </RightNavGroup>
        </Wrapper>
        <LinksContainer>
            <LinkItem>
                <StyledLink to="/" >
                    Home
                </StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/plan" >
                    Daily Plan
                </StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/fridge" >
                    My fridge
                </StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/cuisine" >
                    Cuisine
                </StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/profile" >
                    Profile
                </StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/about" >
                    About
                </StyledLink>
            </LinkItem>

        </LinksContainer>
        </>
    );
};

const LinksContainer = styled.span`
    top: 90px;
    width: 100%;
    display: flex;
    padding: 10px 10vw;
    justify-content: center;
    list-style: none;
    position: sticky;
    z-index: 50;
    border-top: 1px solid #d1d1d1;
`;
const LinkItem = styled.div``;

const StyledLink = styled(Link)`
    text-transform: capitalize;
    padding: 0 10px;
    margin: 0 5px;
    text-decoration: none;
    color: black;
    opacity: 0.8;
    transition: 0.5s;
`;
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
    position: sticky;
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