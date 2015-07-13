'use strict';

import React from 'react';

import List from './CommentList.jsx';
import Form from './CommentForm.jsx';

class Comments extends React.Component {
    render () {
        return (<div>
            <h1>React/Flux Example</h1>
            <List />
            <Form />
        </div>);
    }
};

export default Comments;
