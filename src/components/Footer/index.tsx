import * as React from 'react';
import styled from 'styled-components';

import { SecondaryFooter } from 'components/SecondaryFooter';
import { IFooterProps, IFooterState } from './models';

const Text = styled.span`
  color: #7b7b7b;
  font-size: 18px;
  line-height: 28px;
  word-break: break-word;
  text-align: center;
`;
const Row = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RowSmall = styled(Text)`
  display: none;
`;
const RowCopyright = styled(RowSmall)``;
const AddressLink = styled.a`
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;
const Foot = styled.footer`
  flex-shrink: 0;
  background: #f1f1f1;

  @media screen and (max-width: 640px) {
    ${Row} {
      display: none;
    }

    ${RowSmall} {
      display: block;
    }
  }

  @media screen and (max-width: 410px) {
    ${RowCopyright} {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 320px) {
    ${RowSmall} {
      font-size: 14px;
      line-height: 20px;
    }

    ${RowCopyright} {
      font-size: 10px;
    }
  }
`;

// HACK
export class Footer extends React.PureComponent<IFooterProps, IFooterState> {
  render() {
    const { location } = this.props;

    return (
      <Foot>
        {location && location.pathname !== '/' &&
          <SecondaryFooter />
        }
        <Row>ООО "ЭСМ БАЙ", Тел.:<AddressLink href="tel:+375295313535">&nbsp;+375-29-531-35-35</AddressLink>, E-mail:<AddressLink href="mailto:lesdozor.by@gmail.com">&nbsp;lesdozor.by@gmail.com</AddressLink></Row>
        <Row>© Copyright 2018. ЭСМ БАЙ. All Rights Reserved.</Row>
        <RowSmall>ООО "ЭСМ БАЙ"</RowSmall>
        <RowSmall>Тел.:<AddressLink href="tel:+375295313535">&nbsp;+375-29-531-35-35</AddressLink></RowSmall>
        <RowSmall>E-mail:<AddressLink href="mailto:lesdozor.by@gmail.com">&nbsp;lesdozor.by@gmail.com</AddressLink></RowSmall>
        <RowCopyright>© Copyright 2018. ЭСМ БАЙ. All Rights Reserved.</RowCopyright>
      </Foot>
    );
  }
}

