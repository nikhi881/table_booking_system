import React from 'react';
import '../static/styles/Footer.css';
import logo from '../static/images/vertical.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo-container">
          <img src={logo} alt="Little Lemon" className="footer-logo" />
        </div>
        <div className="footer-links-container">
          <div className="footer-links doormat-navigation">
            <h4>Doormat Navigation</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/reservations">Reservations</a>
            <a href="/order">Order Online</a>
            <a href="/login">Login</a>
          </div>
          <div className="footer-links contact-info">
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
          <div className="footer-links social-media">
            <h4>Social Media Links</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;