'use strict';

import React from 'react';

/**
 * React class to handle the rendering of the HTML head section
 *
 * @class Head
 * @constructor
 */
export default class Html extends React.Component {
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render () {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.title}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/bundle.js" defer></script>
            </html>
        );
    }
}
