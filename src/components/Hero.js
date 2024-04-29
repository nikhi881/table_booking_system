import React from 'react';
import '../static/styles/Hero.css';
import heroImage from '../static/images/restauranfood.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
          </p>
          <button className="hero-button">Book a table</button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Delicious food" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;