import React from 'react';
import '../static/styles/Specials.css';
import greekSaladImage from '../static/images/greek salad.jpg'; 
import bruschettaImage from '../static/images/bruchetta.svg';
import lemonDessertImage from '../static/images/lemon dessert.jpg';

const specialsData = [
  {
    id: 1,
    name: 'Greek Salad',
    description:
      'The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
    price: '$12.99',
    image: greekSaladImage,
  },
  {
    id: 2,
    name: 'Bruchetta',
    description:
      'Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil with salt and olive oil with salt and olive oil',
    price: '$12.99',
    image: bruschettaImage,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$12.99',
    image: lemonDessertImage,
  },
];

const Specials = () => {
  return (
    <section className="specials">
      <div className="container specials-container">
        <h2 className="specials-title">This week's specials!</h2>
        <div className="specials-cards">
          {specialsData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-content">
                <div className='title-wrapper'>
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-price">{item.price}</p>
                </div>
                <p className="card-description">{item.description}</p>
              </div>
              <a href='order' className="card-button">Order a delivery</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;