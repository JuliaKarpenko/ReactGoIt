import React from 'react';
import style from './Img.module.css';

const Img = ({src, alt}) => (
    <img 
        className={style.logo} 
        src={src} 
        alt={alt}
    />
);

export default Img;