import React from 'react';
import styled from 'styled-components';

const Subtotal = ({ subtotal }) => (
  <SubtotalStyles>
    <h2>
      Total:{' '}
      <span className="total">
        {typeof subtotal === 'number' && subtotal > 0
          ? `$${subtotal.toFixed(2)}`
          : '$0'}
      </span>
    </h2>
  </SubtotalStyles>
);

const SubtotalStyles = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;

  h2 {
    margin: 0;
  }

  .total {
    color: #fff;
  }
`;

export default Subtotal;
