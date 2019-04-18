import React, { Component } from "react";
import styles from './AppNav.module.css';

export default class NavList extends Component {

    render() {
        return (
           <nav className={styles.wrapper}>
               <a className={styles.item} href="">menu</a>
               <a className={styles.item} href="">about</a>
               <a className={styles.item} href="">contact</a>
               <a className={styles.item} href="">delivery</a>
           </nav>
        )
    }
}