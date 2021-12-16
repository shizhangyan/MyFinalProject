import React from 'react'
import styled from 'styled-components'
function About() {
    return (
        <Wrapper>
            <h2>About This Websit</h2>
            <Content>
                <P>This website will help the user to set the daily meal depending on</P>
                <P>user's information...</P>
            </Content>
        </Wrapper>
    )
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

const P = styled.p`
    margin: 5px 5px;
    font-size: 20px;
`;

const Wrapper = styled.div`
    top: 90px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;
export default About
