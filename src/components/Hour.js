import { updateDate } from "../redux/actions/moviesActions";
import { dateSelector } from "../redux/selectors/dateSelector";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import styled from "styled-components";

const StyledDate = styled.div`
  color: gold;
  font-size: 16px;
  font-weight: bold;
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

  return <StyledDate> {dateHandler.date.toString()} </StyledDate>
};
