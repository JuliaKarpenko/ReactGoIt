import React, { Component } from 'react';
import style from './App.module.css';
import Header from '../header/Header';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Header/>
      </div>
    );
  }
}

export default App;
