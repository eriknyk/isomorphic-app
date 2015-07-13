'use strict';

module.exports = function (actionContext, payload, done) {
    actionContext.dispatch('CREATE_COMMENT', payload);
    done();
};