import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
    !isAuthenticated && 
        <>
            <Button onClick={() => loginWithRedirect()}><FiLogIn /></Button>
        </>
    );
};
const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 300px;
`;
const Button = styled.button`
    margin-left: 10px;
    padding: 8px 20px;
    background-color: var(--cool-gray);
    color: white;
    border-radius: 10px;
    border: 4px solid white;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }
`
export default Login;