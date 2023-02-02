import React from 'react';
import plant from './plant.png';
import stack from './stack.png';
import safe from './staysafe.png';
import wisdom from './wisdom.png';
import pay from './pay.png';
import group from './group.png';
import desktop from './desktop.png';

function PropertySection() {
  return (
    <section>
      <h3>
        minimum living cost takecare of everything
      </h3>

      <div className="wrapper">
        <div className="desktop">
          <img src={desktop} alt="" srcSet="" />
        </div>
        <div className="content">
          <div className="each">
            <img src={group} alt="" srcSet="" />
            <p>
              pay as little
              <br />
              {' '}
              as possible!
            </p>
          </div>
          <div className="each">
            <img src={wisdom} alt="" srcSet="" />
            <p>
              enjoy wisdom
              <br />
              {' '}
              of community!
            </p>
          </div>
          <div className="each">
            <img src={stack} alt="" srcSet="" />
            <p>
              let somebody else
              <br />
              {' '}
              take care of Landlord!
            </p>
          </div>
          <div className="each">
            <img src={plant} alt="" srcSet="" />
            <p>
              enjoy peaceful
              <br />
              {' '}
              environment!
            </p>
          </div>
          <div className="each">
            <img src={safe} alt="" srcSet="" />
            <p>
              stay safe!
              <br />
              {' '}
              save money!
            </p>
          </div>
          <div className="each">
            <img src={pay} alt="" srcSet="" />
            <p>
              pay for what
              <br />
              {' '}
              you use!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySection;
