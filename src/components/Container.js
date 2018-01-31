import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import Subtotal from './Subtotal';
import Product from './Product';
import { loadData } from '../redux/actions/items';

export class Container extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { items, user, subtotal } = this.props;
    return (
      <div>
        <LogoBar>
          <div className="header__bar">
            <Header {...user} />
            <Subtotal subtotal={subtotal} />
          </div>
        </LogoBar>
        <Wrapper>
          <div />
          <ProductWrapper>
            {items.map(data => <Product {...data} />)}
          </ProductWrapper>
        </Wrapper>
      </div>
    );
  }
}

const LogoBar = styled.div`
  width: 100%;
  background: #bada55;
  z-index: 99999999;
  padding: 5px;
  position: fixed;
  display: flex;
  place-content: center;
  top: 0;
  left: 0;

  .header__bar {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-grap: 20px;
  grid-template-rows: 100px 1fr;
  width: 60%;
  margin: 0 auto;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2rem;
`;

export default connect(
  state => ({
    user: state.user.username,
    items: state.items,
    subtotal: state.subtotal
  }),
  { loadData }
)(Container);
