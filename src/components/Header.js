import React from 'react'
import {Nav} from './index'
import '../static/styles/Header.css';
import Logo from '../static/images/Logo.svg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={Logo} alt="Little Lemon Logo" className="header-logo" />
          <Nav />
      </div>
    </header>
  );
}

export default Header;