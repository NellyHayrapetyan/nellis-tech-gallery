import React from 'react';
import classes from './MenuIcon.module.scss';

interface MenuIconProps {
  onClick: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onClick }) => {

  return (
    <svg onClick={onClick} className={classes.MenuSVG} fill="#696868" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24.75 24.75">
      <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
        c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
        c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
    </svg>
  );
};

export default MenuIcon;