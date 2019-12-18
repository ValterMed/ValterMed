import React, { Component, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import MovieDetail from "../pages/MovieDetail";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { dateSelector } from "../redux/selectors/dateSelector";
import { updateDate } from "../redux/actions/moviesActions";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Acme|Rock+Salt|Cinzel&display=swap');
  body {
    margin: 0px;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const dateHandler = useSelector(dateSelector);

  const updateDateHandler = () => {
    const newDate = new Date();
    dispatch(updateDate({ newDate: newDate.toString() }));
  };

  useEffect(() => {
    const timerID = setInterval(updateDateHandler, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/details/:movieID" component={MovieDetail}></Route> */}
        </div>
      </BrowserRouter>
      <p> Date: </p>
      <p> {dateHandler.date.toString()} </p>
      <Footer />
    </div>
  );
};
