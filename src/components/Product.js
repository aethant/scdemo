import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addAnItem, removeAnItem } from '../redux/actions/items';

import Button from './Button';
import QuantityIndicator from './QuantityIndicator';

export class Product extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  addProduct = () =>
    this.props.addAnItem({ id: this.props.id, price: this.props.price });

  removeProduct = () =>
    this.props.quantity > 0 &&
    this.props.removeAnItem({ id: this.props.id, price: this.props.price });

  render() {
    const { name, image, price, quantity } = this.props;

    return (
      <ProductItemWrapper>
        <ProductImage title={name} src={image} />
        <ProductName title={name}>{name}</ProductName>
        <ProductGutter>
          <div title={`price: $${price}`} className="gutter__price">
            ${price}
          </div>
          <div className="gutter__quantity">
            <Button
              symbol="-"
              alt="remove from cart"
              action={() => this.removeProduct()}
            />
            <QuantityIndicator quantity={quantity} />
            <Button
              symbol="+"
              alt="add to cart"
              action={() => this.addProduct()}
            />
          </div>
        </ProductGutter>
      </ProductItemWrapper>
    );
  }
}

const ProductItemWrapper = styled.div`
  display: grid;
  place-content: center;
  position: relative;
  border-radius: 5px;
  padding-top: 10px;
  outline: 1px solid #fafafa;
  transition: outline ease-in 0.2s;

  &:hover,
  &:focus {
    outline: 1px solid #eaeaea;
  }
`;

const ProductGutter = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  .gutter__price {
    display: flex;
    padding: 3px;
    flex: 0 0 50%;
    align-content: center;
  }

  .gutter__quantity {
    display: flex;
    flex: 0 0 50%;
    justify-content: flex-end;
    place-content: flex-end;
    align-content: center;
  }
`;

const ProductImage = styled.img`
  height: auto;
  min-height: 200px;
  max-height: 200px;
  width: auto;
  min-width: 150px;
  max-width: 200px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 10px;
`;

const ProductName = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  font-variant: small-caps;
  letter-spacing: 0.5px;
`;

export default connect(
  state => ({
    items: state.itemStore
  }),
  {
    addAnItem,
    removeAnItem
  }
)(Product);
