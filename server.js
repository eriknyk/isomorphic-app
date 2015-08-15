/**
 * Isomorphic Demo App
 * Server
 *
 * @author Erik Amaru Ortiz <aortiz.erik@gmail.com>
 */

'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import render from './render.js';

const server = express();
require('events').EventEmitter.defaultMaxListeners = Infinity;

server.use(favicon(__dirname + '/favicon.ico'));
server.use('/public', express.static(__dirname + '/build'));
server.use('/', express.static(__dirname + '/public'));
server.use(render);

// Generic server errors (e.g. not caught by components)
server.use((err, req, res) => {
    console.log('Error on request %s %s', req.method, req.url);
    console.log(err);
    console.log(err.stack);
    res.status(500).send('Something bad happened');
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
