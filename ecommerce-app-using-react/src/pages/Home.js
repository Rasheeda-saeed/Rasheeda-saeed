import React from 'react';
import Banner from '../components/Banner';
import './Home.css';
import offer1 from '../images/dress1.jpg';
import offer2 from '../images/shirt3.webp';
import offer3 from '../images/shirt2.webp';

function Home() {
  const offers = [
    {
      id: 1,
      image: offer2,
      title: '50% Off on Electronics',
    },
    {
      id: 2,
      image: offer1,
      title: 'Buy 1 Get 1 Free',
    },
    {
      id: 3,
      image: offer3,
      title: '30% Off on Fashion',
    },
    {
      id: 4,
      image: offer2,
      title: '50% Off on Electronics',
    },
    {
      id: 5,
      image: offer1,
      title: 'Buy 1 Get 1 Free',
    },
    {
      id: 6,
      image: offer3,
      title: '30% Off on Fashion',
    },
  ];

  return (
    <div>
      <Banner />
      <div className="container offers-section">
        <h2 className="text-center my-4">!!!!!!!!!!!!Special Offers!!!!!!!!!!</h2>
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-6 col-md-3 mb-4">
              <div className="card">
                <img src={offer.image} className="card-img-top" alt={offer.title} />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
