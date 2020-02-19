import React from 'react';

import showcase2 from '../../../Resources/img/showcase2.jpeg';

import Fade from 'react-reveal/Fade';

import './showCase2.scss';

const ShowCase = () => {
  return (
    <Fade>
      <section className='showcase2'>
        <Fade duration={2000}>
          <div className='showcase2__img-wrapper'>
            <img src={showcase2} className='showcase2__img' alt='showcase' />
          </div>
        </Fade>

        <div className='showcase2__text'>
          <h2 className='showcase2__title'>
            <Fade right delay={1000}>
              Our Design Communicate Your Personal Stories
            </Fade>
          </h2>

          <div className='inner-text'>
            <Fade delay={500}>
              <p>
                From small-to large-scale projects, our dedicated team is here
                to help you find the right products for your designs.
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default ShowCase;
