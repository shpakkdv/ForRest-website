import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Company } from 'components/Company';
import { Contacts } from 'components/Contacts';
import { Download } from 'components/Download';
import { News } from 'components/News';
import { Product } from 'components/Product';
import { ISecondaryContentProps, ISecondaryContentState } from './models';

export class SecondaryContent extends React.PureComponent<ISecondaryContentProps, ISecondaryContentState> {
  render() {
    return (
      <Switch>
        <Route path="/about-company" component={Company}/>
        <Route path="/our-product" component={Product}/>
        <Route path="/download" component={Download}/>
        <Route path="/news" component={News}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
    );
  }
}
