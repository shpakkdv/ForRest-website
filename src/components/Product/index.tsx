import * as React from 'react';
import styled from 'styled-components';

import { Description } from 'components/Description';
import { ProductCharacteristics } from 'components/ProductCharacteristics';
import { text } from './constants';
import { IProductProps, IProductState } from './models';

const Content = styled.div``;

export class Product extends React.PureComponent<IProductProps, IProductState> {
  render() {
    return (
      <Content>
        <Description title="Наш продукт" text={text} isHTMLText />
        <ProductCharacteristics />
      </Content>
    );
  }
}
