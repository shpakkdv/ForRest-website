import * as React from 'react';
import styled from 'styled-components';

import { IProductCharacteristicsItemProps, IProductCharacteristicsItemState } from './models';

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 5px 15px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    width: 100%;

    :nth-child(2n) {
      background: #f1f1f1;
    }
  }
`;
const ItemImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const ItemImage = styled.img``;
const ItemTitle = styled.p`
  margin: 0 5px;
  padding: 0;
`;

export class ProductCharacteristicsItem
  extends React.PureComponent<IProductCharacteristicsItemProps, IProductCharacteristicsItemState> {

  render() {
    const {
      title,
      image,
    } = this.props;

    return (
      <Content>
        <ItemImageContainer><ItemImage src={image} alt={title} width="50px" height="50px" /></ItemImageContainer>
        <ItemTitle>{title}</ItemTitle>
      </Content>
    );
  }
}
