import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import img1 from '../../Resources/img/gal3.jpg';
import img2 from '../../Resources/img/gal6.jpg';
import img3 from '../../Resources/img/gal5.jpg';
import img4 from '../../Resources/img/gal15.jpg';
import img5 from '../../Resources/img/gal16.jpg';
import img6 from '../../Resources/img/gal9.jpg';

import blogImg1 from '../../Resources/img/post1.jpg';
import blogImg2 from '../../Resources/img/post2.jpg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <Fade>
          <div className='footer__posts'>
            <h3 className='footer__posts__title'>Recent Posts</h3>
            <div className='footer__posts__container'>
              <div className='footer__post footer__post--1'>
                <img
                  className='footer__post__post-img'
                  src={blogImg1}
                  alt='footer post 1'
                />

                <div className='footer__post__post-content'>
                  <a href='#' className='footer__post__post-title'>
                    Bedroom Ideas from Interior Designers
                  </a>
                  <p>25 Sep 24 Comments</p>
                </div>
              </div>
              <div className='footer__post footer__post--2'>
                <img
                  className='footer__post__post-img'
                  src={blogImg2}
                  alt='footer post 2'
                />
                <div className='footer__post__post-content'>
                  <a href='#' className='footer__post__post-title'>
                    Home Decorating Trends in 2019
                  </a>

                  <p>25 Sep 5 Comments</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className='footer__useful-links'>
          <Fade>
            <h3 className='footer__useful-links__title'>Useful links</h3>
            <div className='footer__links'>
              <ul>
                <li>
                  <Link to='/interior-design'>Interior Design</Link>
                </li>
                <li>
                  <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        <div className='footer__recent-works'>
          <Fade>
            <h3 className='footer__recent-works__title'>Recent Works</h3>
          </Fade>

          <div className='footer__grid-images'>
            <Fade>
              <figure className='footer__item footer__item--1'>
                <img src={img1} className='footer__img' alt='grid item 1' />
              </figure>
            </Fade>

            <Fade>
              <figure className='footer__item footer__item--2'>
                <img src={img2} className='footer__img' alt='grid item 2' />
              </figure>
            </Fade>

            <Fade>
              <figure className='footer__item footer__item--3'>
                <img src={img3} className='footer__img' alt='grid item 3' />
              </figure>
            </Fade>

            <Fade>
              <figure className='footer__item footer__item--4'>
                <img src={img4} className='footer__img' alt='grid item 4' />
              </figure>
            </Fade>

            <Fade>
              <figure className='footer__item footer__item--5'>
                <img src={img5} className='footer__img' alt='grid item 5' />
              </figure>
            </Fade>

            <Fade>
              <figure className='footer__item footer__item--6'>
                <img src={img6} className='footer__img' alt='grid item 6' />
              </figure>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
