import React from 'react';
import styled from 'styled-components';

const Header = ({ firstName, lastName }) => (
  <HeaderStyles>
    <h2>
      Order for{' '}
      <span className="username">
        {firstName} {lastName}
      </span>
    </h2>
  </HeaderStyles>
);

const HeaderStyles = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;

  h2 {
    margin: 0;
  }

  .username {
    color: #fff;
  }
`;

export default Header;
