import React from 'react';
import aboutus from '../images/about.webp'; // Ensure the path is correct
import aboutus2 from '../images/aboutus2.png'; // Example for another image
import quali from '../images/quali.jpg'; 
import about3 from '../images/about3.png';
import leadership from '../images/leadership.png'
import valu1 from '../images/valu1.webp';
import valu2 from '../images/valu2.webp';
import valu3 from '../images/valu3.webp';
import valu4 from '../images/valu4.webp';
import './AboutUs.css'; 
 
function AboutUsPage() {
  return (
    <div className="container">
      

      {/* Carousel for the about page */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={aboutus} className="d-block w-100" alt="About us" />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5 ">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={aboutus2} className="img-fluid rounded-start" alt="Mission" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">We aim to be Earth’s most customer-centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover, and buy anything, and empower businesses and content creators to maximize their success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Section */}
          <div className="col-md-5">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={quali} className="img-fluid rounded-start" alt="Quality" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">Quality is our priority</h5>
                    <p className="card-text">We have our own state-of-the-art production facility to manufacture a variety of products. Throughout the entire process, we make quality our number-one priority.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="row">
          <div className="col-md-5">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src = {about3} className="img-fluid rounded-start" alt="Innovation" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">Innovation</h5>
                    <p className="card-text">Our technology drives path-breaking, customer-focused innovation, making high-quality products accessible and the online shopping experience convenient.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Principles Section */}
          <div className="col-md-5">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={leadership} className="img-fluid rounded-start" alt="Leadership" />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">Our Leadership Principles</h5>
                    <p className="card-text">Our Leadership Principles guide us every day, whether discussing ideas, solving customer problems, or interviewing candidates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="container">
          <h2 className="card-title-3">Our Values</h2>
          <div className="row">
            {/* Empowerment */}
            <div className="col-md-5">
              <div className="mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src = {valu1} className="img-fluid rounded-start" alt="Empowerment" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title-4">Empowerment</h5>
                      <p className="card-text">Everyone deserves to live the life they dream of having.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrity */}
            <div className="col-md-5">
              <div className="mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={valu2} className="img-fluid rounded-start" alt="Integrity" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title-4">Integrity</h5>
                      <p className="card-text">Honest, ethical, and trustworthy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Inclusion and Diversity */}
            <div className="col-md-5">
              <div className="mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={valu3}className="img-fluid rounded-start" alt="Diversity" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title-4">Inclusion and Diversity</h5>
                      <p className="card-text">Respect and embrace differences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Responsibility */}
            <div className="col-md-5">
              <div className="mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={valu4} className="img-fluid rounded-start" alt="Social Responsibility" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title-4">Social Responsibility</h5>
                      <p className="card-text">Do good for the world.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
