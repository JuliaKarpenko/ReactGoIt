import React, { Component } from 'react';

const withLog = WrappedComponent => {
    return class WithLog extends Component {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default withLog;
// for function

// const withLog = WrapprdComponent => {
//     return function WithLog (props) {
//         return <WrapprdComponent {...props}/>
//     }
// }