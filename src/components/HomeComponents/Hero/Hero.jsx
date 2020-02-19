import React from 'react';
import { Link } from 'react-router-dom';

import LogoFineArt from '../../../Resources/img/logo-fineart.png';
import LogoIcrave from '../../../Resources/img/logo-icrave.png';
import LogoPen from '../../../Resources/img/logo-pen.png';
import LogoLuxe from '../../../Resources/img/logo-luxe.png';
import LogoInteriors from '../../../Resources/img/logo-interiors.png';
import LogoHudson from '../../../Resources/img/logo-hudson.png';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './hero.scss';

const Hero = () => {
  return (
    <Fade>
      <div className='hero'>
        <span></span>
        <Fade top delay={700}>
          <h1 className='heading-1 mb-sm'>Interior design service</h1>
        </Fade>
        <Fade delay={700}>
          <button className='btn hero__btn'>
            <Link to='/gallery' className='hero__btn'>
              View our projects
            </Link>
          </button>
        </Fade>
        <div className='hero__logos'>
          <Zoom>
            <img src={LogoLuxe} alt='Hero logo 1' />
            <img src={LogoHudson} alt='Hero logo 2' />
            <img src={LogoIcrave} alt='Hero logo 3' />
            <img src={LogoPen} alt='Hero logo 4' />
            <img src={LogoInteriors} alt='Hero logo 5' />
            <img src={LogoFineArt} alt='Hero logo 6' />
          </Zoom>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
