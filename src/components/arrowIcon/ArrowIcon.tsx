import React from 'react';
import classes from './ArrowIcon.module.scss';

const ArrowIcon = () => {
  return (
    <svg className={classes.ArrowSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <polygon className={classes.animatedPath} points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" fill="#696868"/>
    </svg>
  );
};

export default ArrowIcon;