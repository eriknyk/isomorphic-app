'use strict';

import BaseStore from 'fluxible/addons/BaseStore';

class ApplicationStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);

        this.currentRoute = null;
    }

    handleNavigate (route) {
        if (this.currentRoute && route.path === this.currentRoute.path) {
            return;
        }

        this.currentRoute = route;
        this.emitChange();
    }

    getState () {
        return {
            route: this.currentRoute
        };
    }

    dehydrate () {
        return this.getState();
    }

    rehydrate (state) {
        this.currentRoute = state.route;
    }
}

ApplicationStore.storeName = 'ApplicationStore';
ApplicationStore.handlers = {
    'CHANGE_ROUTE': 'handleNavigate'
};

export default ApplicationStore;
