import * as React from 'react';
import styled from 'styled-components';

import * as forestFooter from 'common/assets/images/forest-footer.png';
import { ISecondaryFooterProps, ISecondaryFooterState } from './models';

const Content = styled.div`
  background: #f1f1f1;
  position: relative;
`;
const Text = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;
const TextItem = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  text-align: center;
  opacity: 0.8;
  color: #ffffff;
  font-size: 33px;
  word-break: break-word;

  @media screen and (max-width: 700px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;
const Image = styled.img`
  width: 100%;
`;

export class SecondaryFooter extends React.PureComponent<ISecondaryFooterProps, ISecondaryFooterState> {
  render() {
    return (
      <Content>
        <Text>
          <TextItem>IT решения</TextItem>
          <TextItem>для безопасности</TextItem>
          <TextItem>леса</TextItem>
        </Text>
        <Image src={forestFooter} />
      </Content>
    );
  }
}
