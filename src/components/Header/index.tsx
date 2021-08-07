import * as React from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as logo from 'common/assets/images/logo.png';
import * as forestHeader from 'common/assets/images/forest-header.jpg';
import * as mail from 'common/assets/images/icons/mail.png';
import * as phone from 'common/assets/images/icons/phone.png';
import { IHeaderProps, IHeaderState } from './models';

const Subhead = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  min-height: 50px;
`;
const Logo = styled.img`
  margin-left: 30px;
`;
const Icon = styled.img`
  margin: 0 10px 0 0;
`;
const Address = styled.address`
  height: 100%;
  margin-left: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const AddressLink = styled.a`
  font-size: 20px;
  font-style: normal;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;

  :first-child {
    margin-right: 20px;
  }
`;
const Text = styled.span`
  color: #ffffff;
  text-shadow: #000000 0 0 2px;
`;
const TextLink = styled(Text)`
  font-size: 18px;
`;
const Nav = styled.nav`
  margin-left: 20px;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2px 0 0 0;
  padding: 0;
`;
const Item = styled.li`
  font-size: 15px;
  font-style: normal;
  text-transform: uppercase;
  margin: 0;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 20px;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
`;
const PrimaryText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 7vw;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;

  @media screen and (min-width: 1200px) {
    font-size: 100px;
  }
`;
const PrimaryButton = styled(RouterLink)`
  margin: 30px 0 0 0;
  padding: 7px 10px;
  background: #ffd100;
  border-radius: 20px;
  text-decoration: none;
  box-shadow: #000000 2px 2px 20px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
const TextPrimaryButton = styled.span`
  color: #000000;
  font-size: 19px;
  text-transform: uppercase;
`;
const Head = styled.header`
  background-image: url(${forestHeader});
  background-size: cover;
  min-height: 450px;

  @media screen and (max-width: 700px) {
    ${Subhead} {
      justify-content: space-between;
    }

    ${Address} {
      flex-direction: column;
      align-items: flex-start;
      margin-right: 20px;
      margin-left: 7px;
    }

    ${AddressLink} {
      margin: 0 0 8px 0;

      :first-child {
        margin-top: 5px
      }
    }
  }

  @media screen and (max-width: 450px) {
    min-height: 350px;

    ${Address} {
      margin-right: 5px;
    }

    ${Logo} {
      margin-left: 5px;
    }

    ${Icon} {
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }

    ${Nav} {
      margin: 0px;
    }

    ${Item} {
      width: 50%;
    }

    ${PrimaryContainer} {
      margin: 0;
    }

    ${PrimaryText} {
      font-size: 40px;
    }

    ${PrimaryButton} {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 380px) {
    min-height: 400px;

    ${Subhead} {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 340px) {
    min-height: 365px;

    ${List} {
      flex-direction: column;
      align-items: center;
    }

    ${Item} {
      width: unset;
    }

    ${PrimaryContainer} {
      display: none;
    }
  }
`;

export class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
  render() {
    const { location } = this.props;

    return (
      <Head>
        <Subhead>
          <RouterLink to="/"><Logo src={logo} height="40px" /></RouterLink>
          <Address>
            <AddressLink href="tel:+375295313535" >
              <Icon src={phone} height="30px" width="30" />
              <Text>+375-29-531-35-35</Text>
            </AddressLink>
            <AddressLink href="mailto:lesdozor.by@gmail.com" >
              <Icon src={mail} height="30px" width="30" />
              <Text>lesdozor.by@gmail.com</Text>
            </AddressLink>
          </Address>
        </Subhead>
        <Nav>
          <List>
            <Item><Link to="/"><TextLink>Главная</TextLink></Link></Item>
            <Item><Link
              to="/about-company"
              // TODO
              // activeStyle={{fontWeight: 'bold', color: 'red'}}
            ><TextLink>О компании</TextLink></Link></Item>
            <Item><Link to="/our-product"><TextLink>Наш продукт</TextLink></Link></Item>
            <Item><Link to="/download"><TextLink>Скачать</TextLink></Link></Item>
            <Item><Link to="/news"><TextLink>Новости</TextLink></Link></Item>
            <Item><Link to="/contacts"><TextLink>Контакты</TextLink></Link></Item>
          </List>
        </Nav>
        <PrimaryContainer>
          <PrimaryText>Бережем лес</PrimaryText>
          <PrimaryText>от пожаров</PrimaryText>
          {location && location.pathname !== '/our-product' &&
            <PrimaryButton to="/our-product">
              <TextPrimaryButton>Подробнее</TextPrimaryButton>
            </PrimaryButton>
          }
        </PrimaryContainer>
      </Head>
    );
  }
}
