import React from 'react';
import style from './Paragraf.module.css'

const Paragraf = ({key, text}) => (
    <h1 key={key} className={style.paragraf}>{text}</h1>
)

export default Paragraf;