import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { IContactInfoProps, IContactInfoState } from './models';

export const Content = styled.div`
  width: 50%
  padding: 0 0 0 10px;
  box-sizing: border-box;
`;
const PrimaryText = styled.p`
  font-weight: bold;
  word-break: break-word;
`;
const TextRow = styled.p`
  margin: 0;
  line-height: 24px;
  word-break: break-word;
`;
const AddressLink = styled.a`
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

export class ContactInfo extends React.PureComponent<IContactInfoProps, IContactInfoState> {
  render() {
    return (
      <Content>
        <Title text="Контакты" />
        <PrimaryText>OOO «ЭСМ БАЙ»</PrimaryText>
        <TextRow>Республика Беларусь, г. Гомель, ул. Троллейбусная, д.12</TextRow>
        <TextRow>Телефон: <AddressLink href="tel:+375295313535">+375-29-531-35-35</AddressLink></TextRow>
        <TextRow>E-mail: <AddressLink href="mailto:lesdozor.by@gmail.com">lesdozor.by@gmail.com</AddressLink></TextRow>
        <TextRow>Время работы:</TextRow>
        <TextRow>понедельник - пятница</TextRow>
        <TextRow>с 9:00 до 18:00</TextRow>
      </Content>
    );
  }
}
