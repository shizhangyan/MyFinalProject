import React, {useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi" 

const Logout = () => {
    const { user, logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Div>
            <Image src={user.picture} alt="picture" />
            <Button
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                <FiLogOut />
            </Button>
        </Div>
        )
    );
};
const Image = styled.img`
    width: 50px;
    border-radius: 25px;
    margin-left: 250px;
`;

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 200px;
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
`;

export default Logout;