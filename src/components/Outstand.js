import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const imageUrlBase = "https://image.tmdb.org/t/p/w780";

const StyledInit = styled.div`
  background: url(${props => imageUrlBase + props.movie.backdrop_path})
    no-repeat;
  background-size: cover;
  height: 700px;
  color: white;
  font-family: "Anton", sans-serif;
`;

const StyledMovie = styled.div`
  position: relative;
  color: rgba(205, 220, 57, 1);
`;

const StyledMovieInfo = styled(Link)`
  text-decoration: none;
  color: rgba(205, 220, 57, 1);
  cursor: pointer;
  position: absolute;
  top: 150px;
  left: 50px;
  background: rgba(38, 50, 56, 0.5);
  padding: 10px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #000000;
`;

const StyledMovieTitle = styled.h1`
  color: rgba(205, 179, 0, 1);
  font-family: "Rock Salt", cursive;
`;

const StyledMovieOverview = styled.p`
  font-size: 14px;
  max-width: 300px;
`;

const StyledAverageVote = styled.span`
  color: rgba(100, 221, 23, 1);
  font-family: "Cinzel", serif;
`;

const Loading = styled.div`
  text-align: centerl
  font-size: 22px;
`;

export default ({ movie }) => {
  if (movie) {
    return (
      <div>
        <StyledInit movie={movie} >
          <StyledMovie>
            <StyledMovieInfo to={`/details/${movie.id}`}>
              <StyledMovieTitle>{movie.title}</StyledMovieTitle>
              <StyledMovieOverview>{movie.overview}</StyledMovieOverview>
              <StyledAverageVote>{movie.vote_average}/10</StyledAverageVote>
            </StyledMovieInfo>
          </StyledMovie>
        </StyledInit>
      </div>
    );
  } else {
    return <Loading>Loading...</Loading>;
  }
};
