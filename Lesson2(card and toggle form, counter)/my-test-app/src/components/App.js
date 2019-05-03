import React, { Component } from 'react';
import './App.css';
import Img from './img/Img';
import Card from './card/Card';
// import Counter from './counter/Counter';
// import StepChanger from './stepChanger/StepChanger';

const infoObj = {
  title: 'CLEARANCE',
  article: 'Toddler Boy Easy Pull-On Denim Pants',
  text: 'Easy to pull on and easy to wear, these comfy pull-on pants are a closet essential.',
  price: '$7.99'
};

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Img src="https://cdn-eu-ec.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.4e/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw2819b16b/productimages/248H040.jpg?sw=470&amp;yocs=8_5_&amp;yoloc=eu" alt="image"/>
        <Card infoObj={infoObj}/>
      </div>
    );
  }
}

export default App;








// ------------counter------------

// export default class App extends Component {
//   state = {
//     counterStep: 0,
//   }

//   handlerChergerStep = () => {
//     this.setState(prevState => ({
//       counterStep: prevState.counterStep + 1,
//     }));
//   };

//   render() {
//     const { counterStep } = this.state
//     return (
//       <div>
//         <StepChanger
//         counterStep={counterStep}
//         onUpdateStep={this.handlerChergerStep}
//       />
//         <Counter step={counterStep} initialValue={0}/>
//       </div>
//     );
//   }
// }