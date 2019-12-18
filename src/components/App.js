import React, { Component, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import MovieDetail from "../pages/MovieDetail";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import { connect } from "react-redux";
import { getDate } from "../redux/creators/moviesActionsCreators";
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
  console.log(dateHandler);

  useEffect(() => {
    const timerID = setInterval(getDate, 1000);
    const start = getDate();
    start()
    return () => {
      clearInterval(timerID);
    }
    // dispatch(updateDate({ newDate: new Date, newMessage: "actualizando redux" }));
  }, []);

  return (
    <div>
      <p> {dateHandler.message} </p>
      <p> {dateHandler.date.toString()} </p>
      <Footer />
    </div>
  );
};





// function Clock() {
//   const [date, setDate] = useState(new Date());

//   function tick() {
//     setDate(new Date());
//   }

//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);
//     return () => {
//       clearInterval(timerID);
//     }
//   },[]);

//   return (
//     <h2>It is Hour {date.toLocaleTimeString()}</h2>
//   );
// }
