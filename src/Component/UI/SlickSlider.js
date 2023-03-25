import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css"

export default class SlickSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider className="slickSlider" {...settings}>
          <div>
            <img src="./image/team.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team2.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team3.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team4.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team2.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team3.png" alt="girl" />
          </div>
          <div>
            <img src="./image/team4.png" alt="girl" />
          </div>

        </Slider>
      </div>
    );
  }
}
