import React from "react";
import Slider from "react-slick";

import "../assets/css/animate.css";
import "../assets/lib/nivo-slider/css/nivo-slider.css";
import "../assets/lib/nivo-slider/css/preview.css";
import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";

import Slide from "./Slide";

export default function SliderArea(props) {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true
  };
  return (
    <div className="slider-area">
      <div className="preview-2">
        <Slider {...settings}>
          {props.slider.map((slide, index) => {
            return (
              <Slide
                key={index}
                imageFluid={
                  slide.image.image
                    ? slide.image.image.childImageSharp
                      ? slide.image.image.childImageSharp.gatsbyImageData
                      : slide.image.image
                    : null
                }
                imageAlt={slide.image.alt}
                imageTitle={slide.heading1 + " " + slide.heading2}
                heading1={slide.heading1}
                heading2={slide.heading2}
                subheading1={slide.subheading1}
                subheading2={slide.subheading2}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
