'use strict';

import React from 'react';
import CommentAction from '../actions/CommentAction';

class CommentForm extends React.Component {
    constructor (props, context) {
        super (props);

        this.state = {comment: ''};
    }

    onSubmit (e) {
        let comment = this.refs.comment.getDOMNode().value;
        this.refs.comment.getDOMNode().value = '';

        this.setState({comment: comment});

        this.context.executeAction(CommentAction, {text: comment});
    }

    render () {
        return (
            <div className='comment-form'>
                <div className="form-group">
                    <textarea className="form-control" ref='comment' placeholder='Insert a comment' />
                </div>
                <div className="form-group">
                    <button className='btn btn-primary' onClick={ this.onSubmit.bind(this) }>Add Comment</button>
                </div>
            </div>
        );
    }
};

CommentForm.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};


export default CommentForm;
