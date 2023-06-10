import React from 'react';
import classes from './Toaster.module.scss';

interface ToasterProps {
  message: string;
  type: string;
}

const Toaster: React.FC<ToasterProps> = ({ message, type }) => {
  return (
    <div className={`${classes.Toaster} ${classes[type]}`}>
      {message}
    </div>
);
};

export default Toaster;