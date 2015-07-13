'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class TimeStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);

        this.time = new Date();
    }

    handleTimeChange (payload) {
        this.time = new Date();
        this.emitChange();
    }

    getState () {
        return {
            time: this.time.toString()
        };
    }

    dehydrate () {
        return {
            time: this.time.toString()
        };
    }

    rehydrate (state) {
        this.time = new Date(state.time);
    }
}


TimeStore.storeName = 'TimeStore',
TimeStore.handlers = {
    'CHANGE_ROUTE': 'handleTimeChange',
    'UPDATE_TIME': 'handleTimeChange'
};

export default TimeStore;
