import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { reasons } from './constants';
import { ICompanyChoiceProps, ICompanyChoiceState } from './models';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReasonImage = styled.img`
  width: 150px;
`;
const ReasonTittle = styled.p`
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 18px;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Reason = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
  margin-bottom: 10px;
  padding: 0 20px;
`;
const ReasonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-self: center;

  @media screen and (max-width: 830px) {
    ${Reason} {
      width: 50%;
      padding: 0;
    }
  }

  @media screen and (max-width: 340px) {
    ${Reason} {
      min-width: unset;
    }

    ${ReasonImage} {
      width: 80%;
    }

    ${ReasonTittle} {
      width: 100%;
      font-size: 14px;
    }
  }
`;

export class CompanyChoice extends React.PureComponent<ICompanyChoiceProps, ICompanyChoiceState> {
  render() {
    return (
      <Content>
        <Title text='Почему выбирают нас?' />
        <ReasonsContainer>
          {
            reasons.map((reason) => (
              <Reason key={reason.title}>
                <ReasonImage src={reason.image} alt={reason.title}/>
                <ReasonTittle>{reason.title}</ReasonTittle>
              </Reason>
            ))
          }
        </ReasonsContainer>
      </Content>
    );
  }
}
