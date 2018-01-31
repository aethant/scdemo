import React from 'react';
import styled from 'styled-components';

const QuantityIndicator = ({ quantity }) => (
  <QuantityBadge>
    {(Number.isInteger(parseInt(quantity, 10)) && quantity) || 0}
  </QuantityBadge>
);

const QuantityBadge = styled.div`
  display: flex;
  place-content: center;
  font-weight: 600;
  padding: 3px;
  flex: 1 1 33%;
  cursor: pointer;
`;

export default QuantityIndicator;
