import React from 'react';
import classes from './Backdrop.module.scss';

interface BackdropProps {
  onClick: () => void;
}
const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.Backdrop} onClick={onClick} />;
};

export default Backdrop;