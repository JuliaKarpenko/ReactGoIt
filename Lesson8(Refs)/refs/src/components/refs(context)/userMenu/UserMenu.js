import React from 'react';
import style from './UserMenu.module.css';
import Button from '../button/Button';

const UserMenu = ({
    image="https://img.icons8.com/dotty/2x/administrator-male.png",
    name="User Name",
    onSingOut = () => null

}) => (
    <section>
        <img 
            className={style.avatar} 
            src={image} alt="user img" 
            width="60"
        />
        <span className={style.name}>{name}</span>
        <Button 
            label="Sing Out" 
            onClick={onSingOut} 
            castomClassName={style.button}
        />
    </section>
);

export default UserMenu;