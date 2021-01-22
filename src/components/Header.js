import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import { useDispatch } from "react-redux";
import Hour from "./Hour";

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

const StyledTitle = styled.a`
  text-decoration: none;
  color: red;
  margin-left: 50px;
`;

export default props => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const onChangeSearch = evt => {
    const { value } = evt.target;
    if (value) {
      dispatch(updateSearch(value));
      setSearchText(value);
    } else {
      onClearTextSearch();
    }
  };
  const onClearTextSearch = () => {
    setSearchText("");
    dispatch(updateSearch());
  };

  return (
    <StyledContainer>
      <StyledTitle href="/ValterMed">
        <h3>That`s My Movie</h3>
      </StyledTitle>
      {props.path === "/" && (
        <Search
          onChangeSearch={onChangeSearch}
          clear={onClearTextSearch}
          search_text={searchText}
        />
      )}
      <Hour />
    </StyledContainer>
  );
};
