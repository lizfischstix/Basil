import React from 'react';
import { Animated } from 'react-animated-css';

const Header = () => {
  return (
    <div className='header'>
    <Animated animationIn='fadeInRightBig'><div className='headerText'> Basil </div></Animated>
    </div>
  );
};

export default Header;
