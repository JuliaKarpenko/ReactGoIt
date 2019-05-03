import React from 'react';
import style from './Button.module.css';

const Button =({
    label="",
    onClick=()=>null,
    type="button",
    castomClassName=""
}) => (
    <button 
        type={type} 
        onClick={onClick} 
        className={ castomClassName === "" ? style.button: `${style.button} ${castomClassName}`}
        >
        {label}
    </button>
);

export default Button;
