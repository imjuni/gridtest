import React, { PropTypes } from 'react';
import '@blueprintjs/core/src/blueprint.scss';
import Socket from '../components/Socket';
import Navbar from '../components/Navbar';
import '../resources/font/NotoSansKR-Hestia/stylesheets/NotoSansKR-Hestia.css';
import './App.scss';

function App({ children }) {
  if (process.env.NODE_ENV === 'development') {
    localStorage.setItem('debug', 'gt:*');
  }

  return (
    <Socket>
      <div className="app-container">
        <Navbar />
        {children}
      </div>
    </Socket>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
