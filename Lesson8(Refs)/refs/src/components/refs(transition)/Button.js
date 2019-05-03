import React from 'react';
import style from './Button.module.css';

const Button = ({type="button", label, onClick}) => (
    <button className={style.button}
    type={type}
    onClick={onClick}>{label}</button>
)

export default Button