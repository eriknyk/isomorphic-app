'use strict';

import React from 'react';
import PageStore from '../stores/PageStore';

class Page extends React.Component {

    componentDidMount () {
        this.context.getStore(PageStore).addChangeListener(this.onStoreChange);
    }

    componentWillUnmount () {
        this.context.getStore(PageStore).removeChangeListener(this.onStoreChange);
    }

    getStoreState () {
        return this.context.getStore(PageStore).getState();
    }

    onStoreChange () {
        this.setState(this.getStoreState());
    }

    render() {
        return (
            <p>{ this.state.content }</p>
        );
    }
}

Timestamp.contextTypes = {
    getStore: React.PropTypes.func.isRequired
};

export default Page;
