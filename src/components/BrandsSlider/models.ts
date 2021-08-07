export interface IBrandsSliderProps {}

export interface IBrandsSliderState {
  sliderSettings: {
    dots: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
  };
}
