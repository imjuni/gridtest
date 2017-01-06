/* eslint  no-console: 0 */
import React from 'react';
import { nav } from '@blueprintjs/core';

function Navbar() {
  return (
    <nav className="pt-navbar pt-dark">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">GridTest</div>
      </div>
      <div className="pt-navbar-group pt-align-left">
        <button className="pt-button pt-minimal pt-icon-home">Home</button>
      </div>
    </nav>
  );
}

export default Navbar;
