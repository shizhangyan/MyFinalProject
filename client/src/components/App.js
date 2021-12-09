import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GetData from "./GetData";
import HomePage from "./HomePage";
import Navbar from "./Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import Form from "./Login/Form";
import About from "./About";
import Cuisine from "./Cuisine";
import Profile from "./Profile";

function App() {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/cuisine">
              <Cuisine />
            </Route>
            <Route path="/plan">
              <GetData />
            </Route>
            <Route path="/recipe">
              <GetData />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
            <About />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
