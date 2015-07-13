import Debug from 'debug';

const debug = Debug('Isomorphic App::navigate action');

export default function (actionContext, payload, done) {
    debug('Executing action: CHANGE_ROUTE');
    actionContext.dispatch('CHANGE_ROUTE', payload);
    done();
};