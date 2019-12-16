import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const imageUrlBase = "https://image.tmdb.org/t/p/w185";

const StyledContainer = styled.div`
  display: flex;
  background: black;
  flex-wrap: wrap;
`;

const StyledItem = styled(Link)`
  background: url(${props => imageUrlBase+props.movie.poster_path}) no-repeat;
  background-size: cover;
  height: 300px;
  width: 200px;
`;

export default ({data}) => {
  return (
    <StyledContainer>
      {data.map(movie => (
        <StyledItem movie={movie} to={`/details/${movie.id}`} />
      ))}
    </StyledContainer>
  )
}