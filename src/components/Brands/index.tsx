import * as React from 'react';
import styled from 'styled-components';

import { BrandsSlider } from 'components/BrandsSlider';
import { Title } from 'components/Title';
import { IBrandsProps, IBrandsState } from './models';

const Content = styled.article`
  margin: 0 0 10px 0;
`;

export class Brands extends React.PureComponent<IBrandsProps, IBrandsState> {
  render() {
    return (
      <Content>
        <Title text="Наши партнеры и бренды" />
        <BrandsSlider />
      </Content>
    );
  }
}
