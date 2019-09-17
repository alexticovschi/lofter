import React from "react";
import Slider from "react-slick";

import img1 from "../../../Resources/img/sld1.jpg";
import img2 from "../../../Resources/img/sld2.jpg";
import img3 from "../../../Resources/img/sld3.jpg";
import img4 from "../../../Resources/img/sld4.jpg";
import img5 from "../../../Resources/img/sld5.jpg";
import img6 from "../../../Resources/img/sld6.jpg";
import img7 from "../../../Resources/img/sld7.jpg";
import img8 from "../../../Resources/img/sld8.jpg";
import img9 from "../../../Resources/img/sld9.jpg";
import img10 from "../../../Resources/img/sld10.jpg";

import Fade from "react-reveal/Fade";

import "./slider.scss";

class SliderComponent extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      speed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <Fade>
        <section className="slider">
          <div>
            <h1 className="slider__title">Latest Projects</h1>
            <div className="slider__wrapper">
              <Slider {...settings}>
                <div className="sld">
                  <img className="sld__img" src={img1} alt="slider img 1" />
                  <h4 className="heading-4 heading-4--dark">
                    Teddington London - Living Room
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img2} alt="slider img 2" />
                  <h4 className="heading-4 heading-4--dark">
                    Fullham London - Apartment
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img3} alt="slider img 3" />
                  <h4 className="heading-4 heading-4--dark">
                    Canary Wharf - Living Room
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img4} alt="slider img 4" />
                  <h4 className="heading-4 heading-4--dark">
                    Reading - Modern Dining Space
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img5} alt="slider img 5" />
                  <h4 className="heading-4 heading-4--dark">
                    Oxford - Modern Lounge
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img6} alt="slider img 6" />
                  <h4 className="heading-4 heading-4--dark">
                    Islington - Master Bedroom
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img7} alt="slider img 7" />
                  <h4 className="heading-4 heading-4--dark">
                    Westminster-Victoria - Classic Living Room
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img8} alt="slider img 8" />
                  <h4 className="heading-4 heading-4--dark">
                    Bath - Romantic Living Room
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img9} alt="slider img 9" />
                  <h4 className="heading-4 heading-4--dark">
                    Herdfordshire - Living Room
                  </h4>
                </div>

                <div className="sld">
                  <img className="sld__img" src={img10} alt="slider img 10" />
                  <h4 className="heading-4 heading-4--dark">
                    Windsor - Bathroom
                  </h4>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default SliderComponent;
