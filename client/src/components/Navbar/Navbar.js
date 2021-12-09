import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import BackgroundImg from "../../assets/meal.png";
import Header from '../Header';

function Navbar() {

    return (
    <>
        <IconContext.Provider value={{color:"#fff"}}>
            <Header />
            {/* <SidebarNav sidebar={sidebar}> */}
            <SidebarNav>
                <SidebarWrap>
                    {SidebarData.map((item, index)=>{
                        return(
                            <LI key={index} className={item.cName}>
                                <LINK to={item.path}>
                                    {item.icon}
                                    <Span>{item.title}</Span>
                                </LINK>
                            </LI>
                        )
                    })}                  
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    </>
    )
};
const SidebarNav = styled.nav`
    margin-top: 90px;
    background: #23c9ff;
    width: 200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position:fixed;
    color: #f5f5f5;
    /* background-image: url(${BackgroundImg}); */
    top: 0;
    left: 0;
    /* left: ${({sidebar}) => (sidebar ? '0':'-100%')}; */
    transition: 350ms;
    z-index: 10;
`;
const SidebarWrap = styled.div`
    width:  100%;
`;

const LINK = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    color: #f5f5f5;
    &:hover {
        background-color: #1a83ff;
    }
`;

const LI = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    color: #f5f5f5;
`;
const Span = styled.span`
    margin-left: 16px;
    color: #050505;
`;

export default Navbar
