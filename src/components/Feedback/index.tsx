import * as React from 'react';
import styled from 'styled-components';
// import * as Sender from 'gmail-send';

// import { Title } from 'components/Title';
// import { credentials } from './constants';
import { IFeedbackProps, IFeedbackState } from './models';

const Content = styled.div``;

export class Feedback extends React.PureComponent<IFeedbackProps, IFeedbackState> {
  send = () => {
    // const send = Sender({
    //   user: 'lesdozor.by@gmail.com',
    //   pass: '000lesdozor',
    //   to:   'lesdozor.by@gmail.com',
    //   subject: 'test ',
    //   text:    'gmail-send example 1AAAAAAAAAAAAAAAAAAA',
    // });

    // send({ text: 'sssssssssssss'});
  }

  render() {
    return (
      <Content onClick={this.send}>
        feedback
      </Content>
    );
  }
}
