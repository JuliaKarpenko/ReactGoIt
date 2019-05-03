import React from 'react';
import './Image.module.css';

const Image = ({src,alt}) => (
    <img 
        className="logo-img" 
        src={src} 
        alt={alt}
    />
)

export default Image;