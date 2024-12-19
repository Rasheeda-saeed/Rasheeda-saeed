import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='container'>
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Contact Us Column */}
          <div className="col-lg-3">
            <h5>Contact Us</h5>
            <p>Email: stockroute@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          {/* Follow Us Column */}
          <div className="col-lg-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-light">Facebook</a><br />
            <a href="#" className="text-light">Twitter</a><br />
            <a href="#" className="text-light">Instagram</a>
          </div>
          {/* Address Column */}
          <div className="col-lg-5">
            <h5>Address</h5>
            <p>ABC Street, City, Country</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p>&copy; 2024 Stock Route. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
