/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
import React from 'react';
import updateTime from '../actions/updateTime';
import TimeStore from '../stores/TimeStore';

class Timestamp extends React.Component{
    constructor (props, context) {
        super(props);

        this.state = context.getStore(TimeStore).getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    componentDidMount () {
        this.context.getStore(TimeStore).addChangeListener(this.onStoreChange);
    }

    componentWillUnmount () {
        this.context.getStore(TimeStore).removeChangeListener(this.onStoreChange);
    }

    getStoreState () {
        return this.context.getStore(TimeStore).getState();
    }

    onStoreChange () {
        this.setState(this.getStoreState());
    }

    onReset (event) {
        this.context.executeAction(updateTime);
    }

    render() {
        return <a href="#" onClick={this.onReset.bind(this)} style={{fontSize: '.8em'}}>{this.state.time}</a>
    }
}

Timestamp.contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default Timestamp;
