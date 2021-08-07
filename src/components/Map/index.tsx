import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { title, YANDEX_MAP } from './constants';
import { IMapProps, IMapState } from './models';

export const Content = styled.div`
  width: 50%;
`;
const IframeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 10px 0;
`;
const Iframe = styled.iframe`
  width: 500px;
  height: 400px;

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }

  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

export class Map extends React.PureComponent<IMapProps, IMapState> {
  render() {
    return (
      <Content>
        <Title text={title} />
        <IframeContainer>
          <Iframe src={YANDEX_MAP} width="500" height="400" frameBorder="0"></Iframe>
        </IframeContainer>
      </Content>
    );
  }
}
