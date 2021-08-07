import * as React from 'react';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

import { IAdvantageProps, IAdvantageState } from './models';

const Content = styledTS<{ background: string; }>(styled.div)`
  width: calc(100% / 3);
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${props => props.background}) 100% 100% no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
const AdvantageImage = styled.img`
  margin-top: 5px;
  height: 100px;
`;
const AdvantageTittle = styled.p`
  margin: 10px 5px;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  color: #ffffff;
`;

export class Advantage extends React.PureComponent<IAdvantageProps, IAdvantageState> {
  render() {
    const { advantage } = this.props;

    return (
      <Content background={advantage.background}>
        <AdvantageImage src={advantage.image} alt={advantage.title}/>
        <AdvantageTittle>{advantage.title}</AdvantageTittle>
      </Content>
    );
  }
}
