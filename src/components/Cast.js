import React from 'react';
import styled from 'styled-components';
import StyledTitle from './StyledTitle';
import Actor from './Actor';

const StyledContainer = styled.div`
  display: flex;
  overflow: scroll;
`;

export default ({ cast }) => {
  if (cast) {
    return (
      <div>
        <StyledTitle>Cast:</StyledTitle>
        <StyledContainer>
          {cast.map(actor => (
            <Actor actor={actor} />
          ))}
        </StyledContainer>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
