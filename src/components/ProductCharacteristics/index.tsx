import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { ProductCharacteristicsItem } from 'components/ProductCharacteristicsItem';
import { IProductCharacteristicsProps, IProductCharacteristicsState } from './models';
import { characteristics } from './constants';

const Content = styled.div``;
const CharacteristicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class ProductCharacteristics extends React.PureComponent<IProductCharacteristicsProps, IProductCharacteristicsState> {
  render() {
    return (
      <Content>
        <Title text="Характеристики системы" />
        <CharacteristicsContainer>
          {
            characteristics.map((item) => (
              <ProductCharacteristicsItem key={item.title} title={item.title} image={item.image}/>
            ))
          }
        </CharacteristicsContainer>
      </Content>
    );
  }
}
