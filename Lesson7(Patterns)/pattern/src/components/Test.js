import React from 'react';
import withLog from '../enhanser/withLog'

const TestComponent = props =>  (
    <div>
        {JSON.stringify(props, null, 2)}
    </div>
);

export default withLog(TestComponent);
