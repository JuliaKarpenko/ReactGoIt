import React, { Component, Fragment } from "react";
import Button from '../button/Button'

export default class Toggle extends Component {

    state = { on: false }

    handleToggle = (bull) => {
        this.setState({ on: bull})
    }

    render() {
        const { on } = this.state
        const { children } = this.props

        console.log({ children });

        return (
            <Fragment>
                <Button bull={on} event={this.handleToggle} />
                {on && children}
            </Fragment>
        )

    }
}