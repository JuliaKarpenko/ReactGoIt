import React from 'react';
import style from './StepChanger.module.css';

const StepChanger = ({counterStep, onUpdateStep}) => (
    <div>
        <p className={style.text}>Counter step: {counterStep}</p>
        <button onClick={onUpdateStep}>Update step!</button>
    </div>
)


export default  StepChanger;