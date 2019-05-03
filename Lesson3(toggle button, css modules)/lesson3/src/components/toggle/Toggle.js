import React, { Component, Fragment } from "react";

export default class Toggle extends Component {

    state = { on: false }
    
    handletoggle = () => {
        this.setState(prevState => ({ on: !prevState.on}))
    }

    render() {
        const { on } = this.state
        const { children } = this.props;

        return (
            <Fragment>
                <button onClick={this.handletoggle}>Some text</button>
                {on && children }
            </Fragment>
        )
    }
}