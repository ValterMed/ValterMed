import React from 'react';
import styled from 'styled-components';
import Logo from '../img/TheMovieDB.png';

const StyledFooter = styled.div`
  background: rgba(38,50,56,1);
  padding: 20px;
`;

export default () => (
  <StyledFooter>
    <img src={Logo} alt="logo movieDB" width="200" height="75" />
  </StyledFooter>
)