import React from "react";
import Fade from "react-reveal/Fade";

import img1 from "../../../Resources/img/service1.jpg";
import img2 from "../../../Resources/img/service2.jpg";
import img3 from "../../../Resources/img/service3.jpg";
import img4 from "../../../Resources/img/service4.jpg";
import img5 from "../../../Resources/img/service5.jpg";
import img6 from "../../../Resources/img/service6.jpg";

import "./follow.scss";

const Follow = () => {
  return (
    <section className="follow">
      <div className="follow__box-left">
        <h1 className="follow__logo-title">
          <span>LOFTER</span>
        </h1>
        <h1 className="follow__title">FOLLOW US</h1>
        <div className="follow__social-icons">
          <a href="https://twitter.com" className="follow__icon">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="https://en-gb.facebook.com/" className="follow__icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.pinterest.co.uk" className="follow__icon">
            <ion-icon name="logo-pinterest"></ion-icon>
          </a>
          <a href="https://www.instagram.com" className="follow__icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>

      <div className="follow__grid-images">
        <Fade>
          <figure className="follow__item follow__item--1">
            <img src={img1} className="follow__img" alt="grid item 1" />
          </figure>
        </Fade>

        <Fade>
          <figure className="follow__item follow__item--2">
            <img src={img2} className="follow__img" alt="grid item 2" />
          </figure>
        </Fade>

        <Fade>
          <figure className="follow__item follow__item--3">
            <img src={img3} className="follow__img" alt="grid item 3" />
          </figure>
        </Fade>

        <Fade>
          <figure className="follow__item follow__item--4">
            <img src={img4} className="follow__img" alt="grid item 4" />
          </figure>
        </Fade>

        <Fade>
          <figure className="follow__item follow__item--5">
            <img src={img5} className="follow__img" alt="grid item 5" />
          </figure>
        </Fade>

        <Fade>
          <figure className="follow__item follow__item--6">
            <img src={img6} className="follow__img" alt="grid item 6" />
          </figure>
        </Fade>
      </div>
    </section>
  );
};

export default Follow;
