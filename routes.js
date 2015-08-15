'use strict';

import React from 'react';

import Application from './components/Application.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';

var routes = {
  path: '/',
  component: Application,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'home', component: Home, default: true },
    require('./bundles/comments'),
    { path: '*', component: NotFound }
  ]
};

module.exports = routes;