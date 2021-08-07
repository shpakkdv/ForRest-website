import * as React from 'react';
// TODO generate css into separate file via webpack
import Slider from 'react-slick';
import styled from 'styled-components';

import { brands } from './constants';
import { IBrandsSliderProps, IBrandsSliderState } from './models';

const SliderContainer = styled.div`
  margin: 0 auto;
  padding: 20px 40px;
  width: 80%;

  @media screen and (max-width: 450px) {
    padding: 10px 20px;
  }
`;
const Brand = styled.img``;

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 3000,
};

export class BrandsSlider extends React.PureComponent<IBrandsSliderProps, IBrandsSliderState> {
  constructor(props: IBrandsSliderProps) {
    super(props);

    sliderSettings.slidesToShow = this.getSlidesToShow();

    this.state = {
      sliderSettings: {...sliderSettings},
    }
  }

  getScreenWidth = () => {
    return document.body.offsetWidth
      || window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSlider);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSlider);
  }

  updateSlider = () => {
    sliderSettings.slidesToShow = this.getSlidesToShow();

    this.setState({
      sliderSettings: {...sliderSettings},
    });
  }

  // TODO: use react-slick responsive
  getSlidesToShow = (): number => {
    const screenWidth = this.getScreenWidth();

    if (screenWidth < 450) {
      return 1;
    } else if (screenWidth < 650) {
      return 2;
    } else {
      return 3;
    }
  }

  render() {
    return (
      <SliderContainer>
        <Slider {...this.state.sliderSettings}>
          {
            brands.map((src) => (
              <Brand key={src} src={src} />
            ))
          }
        </Slider>
      </SliderContainer>
    );
  }
}
