import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component  {

   changeBull = () => {
        this.props.event(!this.props.bull)
    }

    render() {

        return (
            <button 
                onClick={this.changeBull} 
                className="button"
            >
                Add to card
            </button>
        )
    }

}
