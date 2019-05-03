import React, { Component } from 'react';
import UserMenu from './userMenu/UserMenu';
import Button from './button/Button';
import {AuthContext} from '../../context/AuthContext';

export default class AuthManager extends Component {
    static contextType = AuthContext;

    render() {
        const {
            isAuthenticated, 
            user,
            onSignIn,
            onSignOut } = this.context

      return isAuthenticated ? (
        <UserMenu {...user} onSingOut={onSignOut} />
      ) : (<Button label="Sing in" onClick={onSignIn}/>);
    }
}
