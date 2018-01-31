import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const { symbol, alt, action } = this.props;
    return (
      <Symbol title={alt} onClick={action}>
        {symbol}
      </Symbol>
    );
  }
}

const Symbol = styled.div`
  display: flex;
  place-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex: 0 0 33%;
  color: #bada55;
  cursor: pointer;
  user-select: none;
  transition: color ease-in 0.2s;

  &:hover,
  &:focus {
    color: #696969;
  }
`;

export default Button;
