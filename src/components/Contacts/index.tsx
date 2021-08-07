import * as React from 'react';
import styled from 'styled-components';

import { ContactInfo, Content as ContentInfoStyles } from 'components/ContactInfo';
// import { Feedback } from 'components/Feedback';
import { Map, Content as MapStyles } from 'components/Map';
import { IContactsProps, IContactsState } from './models';

const Content = styled.div``;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10px;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 0;

    ${ContentInfoStyles}, ${MapStyles} {
      width: 100%;
    }
  }
`;

export class Contacts extends React.PureComponent<IContactsProps, IContactsState> {
  render() {
    return (
      <Content>
        <Container>
          <Map />
          <ContactInfo />
        </Container>
        {/* <Feedback /> */}
      </Content>
    );
  }
}
