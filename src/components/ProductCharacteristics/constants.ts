import * as accuracy from 'common/assets/images/characteristics/accuracy.png';
import * as fire from 'common/assets/images/characteristics/fire.png';
import * as mobile from 'common/assets/images/characteristics/mobile.png';
import * as radius from 'common/assets/images/characteristics/radius.png';
import * as range from 'common/assets/images/characteristics/range.png';
import * as satellite from 'common/assets/images/characteristics/satellite.png';
import * as scale from 'common/assets/images/characteristics/scale.png';
import * as time from 'common/assets/images/characteristics/time.png';
import * as user from 'common/assets/images/characteristics/user.png';
import * as weather from 'common/assets/images/characteristics/weather.png';

export const characteristics = [
  {
    title: 'Автоматическое обнаружение потенциально опасных объектов: дыма и пламени.',
    image: fire,
  },
  {
    title: 'Точность определения направления на очаг возгорания – 0.5°.',
    image: accuracy,
  },
  {
    title: 'Радиус обзора одной точки мониторинга – до 30 километров.',
    image: radius,
  },
  {
    title: 'Возможная ошибка определения координат очага возгорания – до 250 метров.',
    image: range,
  },
  {
    title: 'Время для обзора одной точки – до 10 минут.',
    image: time,
  },
  {
    title: 'Возможность оперативного масштабирования системы для увеличения площади мониторинга.',
    image: scale,
  },
  {
    title: 'Возможность оперативного получения информации на мобильные устройства.',
    image: mobile,
  },
  {
    title: 'Неограниченное число пользователей с доступом к системе.',
    image: user,
  },
  {
    title: 'Интеграция и учет спутниковых данных.',
    image: satellite,
  },
  {
    title: 'Интеграция и учет метеорологических данных.',
    image: weather,
  },
];
