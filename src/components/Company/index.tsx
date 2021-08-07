import * as React from 'react';
import styled from 'styled-components';

import { CompanyChoice } from 'components/CompanyChoice';
import { Description } from 'components/Description';
import { ICompanyProps, ICompanyState } from './models';

const Content = styled.div``;

const title = 'Наша компания';
const text = 'ООО "ЭСМ БАЙ" - это эффективные системы мониторинга за лесными пожарами. Наша организация является официальным дистрибьютором программного обеспечения "Лесной дозор" в Республике Беларусь. Основным направлением деятельности компании является разработка и внедрение автоматизированной системы мониторинга леса. Система предназначена для предупреждения и раннего обнаружения лесных пожаров. Мы предлагаем только проверенное оборудование и решения, при этом мы гарантируем работоспособность системы в различных условиях эксплуатации. Мы не просто поставляем оборудование на объект, но и производим установку всего необходимого программного обеспечения, а также его настройку под конкретные задачи Заказчика. Таким образом оборудование приходит полностью готовым к работе, что значительно экономит время на монтажные и пуско-наладочные работы.';

export class Company extends React.PureComponent<ICompanyProps, ICompanyState> {
  render() {
    return (
      <Content>
        <Description title={title} text={text} />
        <CompanyChoice />
      </Content>
    );
  }
}
