import * as cloud from 'common/assets/images/advantages/cloud.png';
import * as cloudBackground from 'common/assets/images/advantages/cloud-background.jpg';
import * as eco from 'common/assets/images/advantages/eco.png';
import * as ecoBackground from 'common/assets/images/advantages/eco-background.jpg';
import * as key from 'common/assets/images/advantages/key.png';
import * as keyBackground from 'common/assets/images/advantages/key-background.jpg';
import * as lamp from 'common/assets/images/advantages/lamp.png';
import * as lampBackground from 'common/assets/images/advantages/lamp-background.jpg';
import * as man from 'common/assets/images/advantages/man.png';
import * as manBackground from 'common/assets/images/advantages/man-background.jpg';
import * as protect from 'common/assets/images/advantages/protect.png';
import * as protectBackground from 'common/assets/images/advantages/protect-background.jpg';
import { IAdvantage } from './models';

export const advantages = [
  {
    title: 'Инновационные технологии, только профессиональное ПО и сертифицированное оборудование',
    image: lamp,
    background: lampBackground,
  },
  {
    title: 'Высокое качество используемого оборудования и выполняемых работ, гарантия до 5 лет',
    image: protect,
    background: protectBackground,
  },
  {
    title: 'Комплекс работ под ключ: проектирование, поставка оборудования, монтажные и пусконаладочные работы',
    image: key,
    background: keyBackground,
  },
  {
    title: 'Квалифицированные специалисты, техническая поддержка и обучение персонала управлению системой',
    image: man,
    background: manBackground,
  },
  {
    title: 'Разработка ПО по заданию Заказчика, облачный сервис, более 20 торговых марок',
    image: cloud,
    background: cloudBackground,
  },
  {
    title: 'Безопасность, экологичность и энергоэффективность поставляемых систем',
    image: eco,
    background: ecoBackground,
  },
] as IAdvantage[];
