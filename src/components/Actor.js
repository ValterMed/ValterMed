import React from 'react';
import styled from 'styled-components';

const imageUrlBase = "https://image.tmdb.org/t/p/w185";

const StyledContainer = styled.div`
  border: 2px solid gold;
  margin: 2px;
`;

const StyledPhoto = styled.img``;

const StyledName = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

export default ({ actor }) => (
  <StyledContainer>
    <StyledPhoto
      src={
        actor.profile_path
          ? imageUrlBase + actor.profile_path
          : "http://dummyimage.com/185&text=no_image"
      }
    />
    <StyledName> {actor.name} </StyledName>
  </StyledContainer>
);
