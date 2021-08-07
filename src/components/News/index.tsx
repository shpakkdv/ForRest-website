import * as React from 'react';
import styled from 'styled-components';

import { Description } from 'components/Description';
import { Title } from 'components/Title';
import { news } from './constants';
import { INewsProps, INewsState } from './models';

const Content = styled.div``;
const NewsContainer = styled.div``;
const NewsImage = styled.img`
  width: 350px;
`;
const NewsItem = styled.article`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 5px 15px;

  :nth-child(2n) {
    background: #f1f1f1;
  }

  :last-child {
    padding-bottom: 15px;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: center;

    ${NewsImage} {
      margin-bottom: 10px;
      width: unset;
      max-width: 80%;
    }
  }
`;

export class News extends React.PureComponent<INewsProps, INewsState> {
  render() {
    return (
      <Content>
        <Title text="Новости" />
        <NewsContainer>
          {
            news.map((newsItem) => (
              <NewsItem key={newsItem.title}>
                <NewsImage src={newsItem.image} />
                <Description title={newsItem.title} isDescriptionTitle text={newsItem.text} />
              </NewsItem>
            ))
          }
        </NewsContainer>
      </Content>
    );
  }
}
