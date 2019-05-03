import React from 'react';
import './Img.css';

const Img = ({src, alt}) => (
    <img 
        className="logo-img" 
        src={src} 
        alt={alt}
    />
);

export default Img;