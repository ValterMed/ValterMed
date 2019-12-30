import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Acme|Rock+Salt|Cinzel&display=swap');
  body {
    margin: 0px;
  }
`;

export default () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:movieID" component={MovieDetail}></Route>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
