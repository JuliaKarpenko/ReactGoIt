import React, { Component } from "react";
import styles from './Header.module.css';
import Img from '../img/Img';
import NavList from '../appNav/AppNav';
import UserMenu from '../userMenu/UserMenu'

export default class Header extends Component {


    render() {

        return (
            <section className={styles.wrapper}> 
                <Img src="http://pluspng.com/img-png/art-of-sun-logo-png-vector-brush-sun-art-logo-389.png" alt="logo"/>
                <NavList />
                <UserMenu/> 
            </section>
        )
    }
}