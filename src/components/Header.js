import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  updateSearch,
  searchReset
} from "../redux/creators/moviesActionsCreators";

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 75px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h3 {
    margin-left: 20px;
  }
`;

const StyledDate = styled.div`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

export default (props) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const onChangeSearch = evt => {
    const { value } = evt.target;
    if (value) {
      dispatch(updateSearch(value));
      // this.props.getSearch(value)
      setSearchText(value);
    } else {
      onClearTextSearch();
    }
  };
  const onClearTextSearch = () => {
    setSearchText("");
    searchReset();
  };

  return (
    <StyledContainer>
      <h3>That`s My Movie</h3>
      {props.path === "/" && (
        <Search
          onChangeSearch={onChangeSearch}
          clear={onClearTextSearch}
          search_text={searchText}
        />
      )}
      {/* <StyledDate> {this.props.test.date.toString()} </StyledDate> */}
    </StyledContainer>
  );
};
