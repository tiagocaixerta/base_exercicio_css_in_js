import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary || '#333'};
  color: ${({ theme }) => theme.colors.text || 'white'};
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>EBAC Jobs</Title>
    </HeaderWrapper>
  );
}

export default Header;
