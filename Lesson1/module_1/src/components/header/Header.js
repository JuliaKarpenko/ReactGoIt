import React, {Fragment } from 'react';
import Menu from '../menu/Menu';
import Image from '../Image/Image';

const Header = ({ src }) => {
    const menuItem = [
        { id: 1, name: 'main' },
        { id: 2, name: 'home' },
        { id: 3, name: 'portfolio' },
        { id: 4, name: 'about us' },
        { id: 5, name: 'price' },
        { id: 6, name: 'contacts' }
    ];
    return (
        <Fragment>
            <h1>
                <a href="#">
                    <Image src={src} alt="image" />
                </a>
            </h1>
            {menuItem.length>0 && (<Menu items={menuItem}/>)}
        </Fragment>
    )
}

export default Header;