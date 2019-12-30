import React from "react";
import styled from "styled-components";

const StyledContainerSearch = styled.div`
  padding: 5px;
  border: 1px solid white;
`;

const StyledInputSearch = styled.input`
  background: none;
  border: none;
  height: 22px;
  color: #FFCA28;
  width: 200px;
  margin-left: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #FFCA28;
  }
`;

const StyledClearButton = styled.a`
  color: white;
`;

export default ({onChangeSearch, clear, search_text}) => (
  <StyledContainerSearch>
    <i className="fa fa-search fa-lg"></i>
    <StyledInputSearch 
      placeholder="Search" 
      onChange={onChangeSearch} 
      value={search_text} />
    <StyledClearButton href="#" onClick={clear}>
      <i className="fa fa-close fa-lg"></i>
    </StyledClearButton>
  </StyledContainerSearch>
  )
