'use strict';

import React from 'react';
import Nav from './Nav.jsx';
import Timestamp from './Timestamp.jsx';
import ApplicationStore from '../stores/ApplicationStore';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';

class Application extends React.Component {
    getStoreState () {
        return this.context.getStore(ApplicationStore).getState();
    }

    onChange () {
        this.setState(this.getStoreState());
    }

    componentDidMount () {
        this.context.getStore(ApplicationStore).addChangeListener(this.onChange);
    }

    componentWillUnmount () {
        this.context.getStore(ApplicationStore).removeChangeListener(this.onChange);
    }

    render () {
        return (
            <div className="container">
                <Nav />
                { this.props.children }
                <Timestamp />
            </div>
        );
    }
}

Application.contextTypes = {
    getStore: React.PropTypes.func.isRequired
};

export default Application;