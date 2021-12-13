import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GetData from "./GetData";
import HomePage from "./HomePage";
import GlobalStyles from "./GlobalStyles";
import About from "./About";
import Cuisine from "./Cuisine";
import Profile from "./Profile";
import Header from "./Header";
import MyFridge from "./MyFridge";
import RecipeDetails from "./RecipeDetails";
import SearchInFridge from "./SearchInFridge";
function App() {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        {/* <Navbar /> */}
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
            <Route path="/fridge">
              <MyFridge />
            </Route>
            <Route path="/searchfridge/:query">
              <SearchInFridge />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/recipes/:id">
              <RecipeDetails />
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
