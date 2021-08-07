import * as React from 'react';
import styled from 'styled-components';

import { Title } from 'components/Title';
import { services } from './constants';
import { IServicesProps, IServicesState } from './models';

const Content = styled.article``;
const ServiceImage = styled.img`
  width: 100%;
`;
const ServiceTittle = styled.p`
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 18px;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    align-items: flex-start;
  }
`;
const Service = styled.div`
  width: 200px;
  min-width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 50%;
    height: unset;

    ${ServiceImage}, ${ServiceTittle} {
      width: 200px;
    }

    ${ServiceTittle} {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    ${ServiceImage}, ${ServiceTittle} {
      width: 140px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 100%;

    ${ServiceImage} {
      width: 60%;
    }

    ${ServiceTittle} {
      width: 100%;
    }
  }
`;

export class Services extends React.PureComponent<IServicesProps, IServicesState> {
  render() {
    return (
      <Content>
        <Title text="Наши услуги"/>
        <ServicesContainer>
          {
            services.map((service) => (
              <Service key={service.title}>
                <ServiceImage src={service.image} alt={service.title}/>
                <ServiceTittle>{service.title}</ServiceTittle>
              </Service>
            ))
          }
        </ServicesContainer>
      </Content>
    );
  }
}
