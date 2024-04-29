import React from 'react';
import '../static/styles/Testimonials.css';
import userImage from '../static/images/icon _user_.png'; 
import {Rating} from './'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Name',
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: userImage,
      rating: 4,
    },{
      id: 2,
      name: 'Name',
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: userImage,
      rating: 3,
    },{
      id: 3,
      name: 'Name',
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: userImage,
      rating: 4,
    },{
      id: 4,
      name: 'Name',
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: userImage,
      rating: 5,
    },

  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
          <h3 className="testimonial-name">{testimonial.username}</h3>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <Rating value={4} total={5} />
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;