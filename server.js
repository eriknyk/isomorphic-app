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

server.use(favicon(__dirname + '/favicon.ico'));
server.use('/public', express.static(__dirname + '/build'));
server.use('/', express.static(__dirname + '/public'));
server.use(render);

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
