'use strict';

import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import Location from 'react-router/lib/Location';
import serialize from 'serialize-javascript';
import Debug from 'debug';
import app from './app';
import navigateAction from './actions/navigate';

let debug = Debug('Isomorphic App');
let HtmlComponent = React.createFactory(require('./components/Html.jsx'));

export default (req, res, next) => {
    let context = app.createContext();

    debug('Executing navigate action:', req.path);

    let location = new Location(req.originalUrl);

    Router.run(app.getComponent(), location, (error, initialState, transition) => {
        context.executeAction(navigateAction, initialState, function (err) {

            if (initialState) {
                debug('Exposing context state');
                let exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

                debug('Rendering Application component into html');

                 let RouterComponent = (
                    <Router
                        location={initialState.location}
                        branch={initialState.branch}
                        components={initialState.components}
                        params={initialState.params} />);

                let ApplicationComponent = React.createElement(
                    FluxibleComponent,
                    { context: context.getComponentContext() },
                    RouterComponent
                );

                let ApplicationMarkup = React.renderToString(ApplicationComponent);

                let html = React.renderToStaticMarkup(HtmlComponent({
                    state: exposed,
                    markup: ApplicationMarkup
                }));

                debug('Sending markup');
                res.type('html');
                res.write('<!DOCTYPE html>' + html);
                res.end();
            } else {
                let err = new Error();
                err.status = 404;
                next(err)
            }
        });
    });
}
