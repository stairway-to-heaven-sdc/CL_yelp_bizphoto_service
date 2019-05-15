import React from 'react';
import './Topbar.css';
import Topcontent from './Topcontent';
import Navbar from '../Navbar/Navbar';

const Topbar = () => (
  <div className="page-header">
    <div className="main-header_wrapper">
      <div className="main-header">
        <div className="main-content-wrap">
          <Topcontent />
        </div>
      </div>
    </div>
    <div className="nav-header">
      <div className="nav-container">
        <Navbar />
      </div>
    </div>
  </div>
);

export default Topbar;
