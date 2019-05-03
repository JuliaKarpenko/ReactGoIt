import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
   width: 400,
   height: 400,
   backgroundColor: '#009688',
   opacity: 0,
   transition: 'opacity 500ms ease-in-out'
};

const transitionStyle = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};

export default class MyComponent extends Component {
    state={
        visible: false
    };

    toggle = () => {
        this.setState(presState => ({visible: !presState.visible}));
    };

    render() {
        const {visible} = this.state;

        return(

            <div>
                <button onClick={this.toggle}>Toggle</button>
                <Transition in={visible} timeout={{ appear: 500, enter: 300, exit: 500, }} unmountOnExit>
                { state => (
                    <div>
                        <h1>Current State: {state}</h1>
                        <div 
                            style={{
                                ...defaultStyle,
                                ...transitionStyle[state]
                        }}
                        /> 
                    </div>
                )}
                </Transition>
            </div>
        );
    }
}