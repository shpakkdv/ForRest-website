import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { IDescriptionProps, IDescriptionState } from './models';

const Content = styled.div``;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  word-break: break-word;
  padding: 0 10px;
  max-width: 900px;
  text-align: justify;
  line-height: 24px;

  :first-letter {
    padding-left: 20px;
  }
`;
const DescriptionTitle = styled.span`
  display: flex;
  justify-content: center;
  word-break: break-word;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export class Description extends React.PureComponent<IDescriptionProps, IDescriptionState> {
  render() {
    const {
      title,
      text,
      isHTMLText = false,
      isDescriptionTitle = false,
    } = this.props;

    return (
      <Content>
        {
          isDescriptionTitle
          ? <DescriptionTitle>{title}</DescriptionTitle>
          : <Title text={title} />
        }
        <TextContainer>
          {
            isHTMLText
              ? <Text dangerouslySetInnerHTML={ { __html: text } } />
              : <Text>{text}</Text>
          }
        </TextContainer>
      </Content>
    );
  }
}
