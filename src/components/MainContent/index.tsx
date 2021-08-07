import * as React from 'react';
import styled from 'styled-components';

import { Advantages } from 'components/Advantages';
import { Brands } from 'components/Brands';
import { Services } from 'components/Services';
import { IMainContentProps, IMainContentState } from './models';

const Content = styled.div``;

export class MainContent extends React.PureComponent<IMainContentProps, IMainContentState> {
  render() {
    return (
      <Content>
        <Services />
        <Advantages />
        <Brands />
      </Content>
    );
  }
}
