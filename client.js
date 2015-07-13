/**
 * Isomorphic Demo App
 * Client
 *
 * @author Erik Amaru Ortiz <aortiz.erik@gmail.com>
 */

'use strict';

import debug from 'debug';
import React from 'react';
import { Router, HistoryLocation } from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import app from './app';
import navigateAction from './actions/navigate';

const clientDebug = debug('Isomorphic App');
const dehydratedState = window.App; // Sent from the server
const history = new BrowserHistory();

window.React = React;// For chrome dev tool support
window.fluxibleDebug = clientDebug;

// Fix for react checksum problem
if (typeof history.setup === 'function') {
    history.setup();
}

clientDebug('app.rehydrate');

function RenderApp(context, Handler){
    var mountNode = document.getElementById('app');
    var RouterComponent = (
        <Router
            children={ app.getComponent() }
            history={ history } />);

    React.render(
        React.createElement(
            FluxibleComponent,
            { context: context.getComponentContext() },
            RouterComponent
        ),
        mountNode,
        function () {
            debug('React Rendered');
        }
    );
}

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }

    window.context = context;
    var firstRender = true;

    Router.run(app.getComponent(), history.location, function (error, Handler, state) {
        if (firstRender) {
            // Don't call the action on the first render on top of the server rehydration
            // Otherwise there is a race condition where the action gets executed before
            // render has been called, which can cause the checksum to fail.
            clientDebug('first firstRender');
            RenderApp(context, Handler);
            firstRender = false;
        } else {
            clientDebug('Client Render');
            context.executeAction(navigateAction, state, function () {
                RenderApp(context, Handler);
            });
        }
    });
});
