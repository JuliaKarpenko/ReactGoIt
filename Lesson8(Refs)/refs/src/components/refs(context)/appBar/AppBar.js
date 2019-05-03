import React from 'react';
import AuthManager from '../AuthManager';
import style from './AppBar.module.css';


const AppBar = () =>  (
    <header className={style.container}>
       <AuthManager />
    </header>
)

export default AppBar;