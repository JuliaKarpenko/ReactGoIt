import React, { Component } from 'react';
import style from './App.module.css';
import Paragraf from './paragraf/Paragraf';
import Header from './header/Header';
import Toggle from './toggle/Toggle';


// const numb = '5';

const arr = [{title: 'title', text: 'text'}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          {/* for string */}
        
          {/* <Header text={numb}/> */}

          {/* for arr */}
          <Header userData={arr}/>

          <h3 className={style.title}>Hello</h3>
          <p className={style.text}>composes Hello</p>
          <Paragraf key='0' text="Paragraf"/>
          <Toggle >
            <Paragraf key='1' text="React"/>
            <Paragraf key='2' text="is"/>
            <Paragraf key='3' text="easy"/>
          </Toggle>
        </header>
      </div>
    );
  }
}
export default App;
