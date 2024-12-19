import React from 'react';
import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner3.jpg'

function Banner() {
  return (
    <div className='container'>
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src={banner1}   className="d-block w-100" 
            alt="image1"
             style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            src={banner2}
            className="d-block w-100" 
            alt="image2"
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default Banner;
