import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => (
  <ul>
    <li>
      <NavLink exact activeClassName={style.activeLink} className={style.default} to="/">Home</NavLink>
    </li>
    <li>
      <NavLink activeClassName={style.activeLink} className={style.default} to="/about">About</NavLink>
    </li>
    <li>
      <NavLink activeClassName={style.activeLink} className={style.default} to="/articles">Articles Page</NavLink>
    </li>
  </ul>
)

export default Nav;