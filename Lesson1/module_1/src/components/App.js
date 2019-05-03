import React, { Fragment } from 'react';
import '../components/App';
import Header from './header/Header';
import Dishes from './dishes/Dishes';
import DishesList from './dishes/DishesList';
import db from './dishes/assests/menu.json';



const App = () => (
  <Fragment>
   <Header src ='https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg'/>
   <Dishes title ="Dishes-title">
    <DishesList db={db}/>
   </Dishes>
  
  </Fragment>
)


export default App;
