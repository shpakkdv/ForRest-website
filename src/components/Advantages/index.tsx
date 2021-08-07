import * as React from 'react';
import styled from 'styled-components';

import { Advantage } from 'components/Advantage';
import { Title } from 'components/Title';
import { advantages } from './constants';
import { IAdvantagesProps, IAdvantagesState } from './models';

const Content = styled.article``;
const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

export class Advantages extends React.PureComponent<IAdvantagesProps, IAdvantagesState> {
  render() {
    return (
      <Content>
        <Title text="Наши возможности и преимущества"/>
        <AdvantagesContainer>
          {
            advantages.map((advantage) => <Advantage key={advantage.title} advantage={advantage} />)
          }
        </AdvantagesContainer>
      </Content>
    );
  }
}
