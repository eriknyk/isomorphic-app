'use strict';

import React from 'react';
import CommentStore from '../stores/CommentStore';

export default class CommentList extends React.Component {
    constructor (props, context) {
        super(props);

        this.state = context.getStore(CommentStore).getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    componentDidMount () {
        this.context.getStore(CommentStore).addChangeListener(this.onStoreChange);
    }

    componentWillUnmount () {
        this.context.getStore(CommentStore).removeChangeListener(this.onStoreChange);
    }

    onStoreChange () {
        this.setState(this.getStoreState());
    }

    getStoreState () {
        return this.context.getStore(CommentStore).getState();
    }

    render () {
        let comments = this.state.comments.map(function(comment, index) {
            return (
                <li className='list-group-item' key={'comment-' + index}>
                    {comment.text}
                </li>
            )
        });

        return (
            <div>
                <h3>Comments</h3>
                <hr />
                <ul className='list-group'>
                    {comments}
                </ul>
            </div>
        );
    }
}

CommentList.contextTypes = {
    getStore: React.PropTypes.func.isRequired
};
