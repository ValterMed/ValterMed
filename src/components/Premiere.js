import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const imageUrlBase = "https://image.tmdb.org/t/p/w154";

const StyledContainer = styled.div`
  > ul {
    background: rgba(66, 165, 245, 1);
    padding-left: 0;
    overflow: scroll;
    display: flex;
    margin: 0px;
    align-items: strech;
  }
`;

const StyledMovie = styled(Link)`
  list-style: none;
  display: inline-block;
  background: url(${props => imageUrlBase+props.movie.poster_path}) no-repeat;
  background-size: cover;
  min-width: 200px;
  margin: 5px;
  height: 300px;
  font-family: "Acme", sans-serif;
  font-size: 25px;
  font-weight: bold;
  >span {
    display: none;
    background: rgba(38,50,56,0.5);
  }
  &:hover {
    >span {
      display: block;
    }
  }
`;

export default ({ movies }) => (
  <StyledContainer>
    <ul>
      {movies.map(movie => (
        <StyledMovie key={movie.id} to={`/details/${movie.id}`} movie={movie}>
          <span>{movie.title}</span>
        </StyledMovie>
      ))}
    </ul>
  </StyledContainer>
);
