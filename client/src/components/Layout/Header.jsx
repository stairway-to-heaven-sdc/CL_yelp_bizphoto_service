import React from 'react';
import Mainbar from './Mainbar';
import Navbar from '../Navbar/Navbar';
import Addon from './Addon';

const Header = () => (
  <div className="header">
    <Addon />
    <div className="header-main">
      <div className="header-main-wrapper">
        <Mainbar />
      </div>
    </div>
    <div className="header-nav">
      <div className="header-nav-wrapper">
        <Navbar />
      </div>
    </div>
  </div>
);

export default Header;
