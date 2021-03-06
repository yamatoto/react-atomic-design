import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header: React.VFC<Record<string, unknown>> = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  color: #fff;
  margin: 0 8px;
`;
