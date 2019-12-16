import React from "react";
import styled from "styled-components";
import Search from "./Search";
import {connect} from 'react-redux';

//Actions
import {getSearch, clearSearch} from '../redux/actions/MoviesActions';

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

class Header extends React.Component {
  state = {
    search_text: ""
  }

  onChangeSearch = evt => {
    const {value} = evt.target
    if(value) {
      this.props.getSearch(value)
      this.setState({
        search_text: value
      })
    } else {
      this.onClearTextSearch()
    }
    
  }
  onClearTextSearch = () => {
    this.setState({
      search_text: ""
    })
    this.props.clearSearch()
  }

  render() {
    return (
      <StyledContainer>
        <h3>That`s My Movie</h3>
        {this.props.path === "/" && 
        <Search 
          onChangeSearch = {this.onChangeSearch}
          clear = {this.onClearTextSearch}
          search_text = {this.state.search_text}
          />}
        <StyledDate> {this.props.test.date.toString()} </StyledDate>
      </StyledContainer>
    );
  }
}

function mapStatetoProps({test}) {
  return {test}
}

export default connect(mapStatetoProps, {
  getSearch,
  clearSearch
})(Header)