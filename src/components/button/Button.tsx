import React, { FC } from 'react';
import './Button.scss';

type ButtonType = {
  clickHandler?:()=>void;
}
const Button:FC<ButtonType> = ({ clickHandler, children }) => (
  <button className="button" onClick={clickHandler}>
    {children}
  </button>
);

export default Button;
