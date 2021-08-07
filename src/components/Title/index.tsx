import * as React from 'react';
import styled from 'styled-components';

import { BackgroundColor } from 'common/styles';
import { ITitleProps, ITitleState } from './models';

const Content = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  position: relative;
`;
const TitleContainer = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding: 0 10px;
  background: ${BackgroundColor};
  z-index: 1;
`;
const Line = styled.hr`
  position: absolute;
  top: 2px;
  width: 95%;
`;

export class Title extends React.PureComponent<ITitleProps, ITitleState> {
  render() {
    return (
      <Content>
        <TitleContainer>{this.props.text}</TitleContainer>
        <Line />
      </Content>
    );
  }
}
