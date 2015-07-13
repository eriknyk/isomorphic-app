'use strict';

import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
    render () {
        return (<nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Isomorphic App</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className={this.isActive('/') ? 'active' : ''}><Link to='/'>Home</Link></li>
                <li className={this.isActive('/about') ? 'active' : ''}><Link to='/about'>About</Link></li>
                <li className={this.isActive('/comments') ? 'active' : ''}><Link to='/comments'>Comments</Link></li>
              </ul>
            </div>
          </div>
        </nav>);
    }

    isActive (url) {
        // return this.context.router.isActive('about'); // ??? <- it is not working as expected
        const { location } = this.context.router.state;
        return location.pathname == url;
    }
}


Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Nav;