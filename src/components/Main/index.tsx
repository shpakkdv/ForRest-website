import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { MainContent } from 'components/MainContent';
import { SecondaryContent } from 'components/SecondaryContent';
import { IMainProps, IMainState } from './models';

const Content = styled.main`
  flex: 1 0 auto;
`;

// TODO: PureComponent
export class Main extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={MainContent}/>
          <Route component={SecondaryContent}/>
        </Switch>
      </Content>
    );
  }
}
