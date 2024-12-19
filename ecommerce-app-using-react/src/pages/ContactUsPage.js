import React from 'react';
import contactImage from '../images/contc1.webp';
import './contactus.css'

function ContactUsPage() {
  return (
    <div className="container my-4">
      {/* Image Section */}
      <div className="card text-bg-dark mt-4">
        <img
          src={contactImage}
          className="card-img"
          alt="Contact"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-img-overlay"></div>
      </div>

      {/* Get In Touch and Help Center */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Get In Touch</h5>
              <p className="card-text-1">
                Please fill out the quick form and we will be in touch with lightning speed.
              </p>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
              
            </div>
          </div>
        </div>

        {/* Help Center Column */}
        <div className="col-sm-5  my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HELP CENTER</h5>
              <p className='card-text-1'>We are here to help you.</p>
              <p>
                For support or any questions, email us at: <p><strong>support@stockroute.com</strong></p>
              </p>
              <p>Phone: +971 11223344</p>
              <p className='card-title-p'>Stock Route UAE</p>
              <p>ABC street, City, Country, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
