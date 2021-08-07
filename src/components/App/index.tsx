import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Main } from 'components/Main'
import { IAppProps, IAppState } from './models';

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// TODO: PureComponent
// HACK
export class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <Page>
        <Route component={Header} />
        <Main />
        <Route component={Footer} />
      </Page>
    );
  }
}

