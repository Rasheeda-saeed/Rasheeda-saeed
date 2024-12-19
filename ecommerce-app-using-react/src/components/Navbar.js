import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/newlo.jpg'; 
import './Navbar.css';
function Navbar() {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Stock Route Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <p className='brand-name' >Stock Route</p>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
        <Link className="btn btn-outline-success my-2 my-sm-0" to="/cart">Cart</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
