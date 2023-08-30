import React from 'react';
import logo from './logo1.png';
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  
  const location=useLocation();
    return (
        <div>
            <header id="home-header">
        <div className="navdiv1">
        <ul className="first-ul">
            <li><i class="bi bi-person-circle"></i>&nbsp;<Link to="/login"> Employee Login</Link></li>
            <li><i class="bi bi-envelope"></i>&nbsp;<a href="mailto:info@perksys.com"> info@perksys.com</a></li>
            <li><i class="bi bi-phone-fill"></i> &nbsp; 214-842-6969</li>
        </ul>
        </div>
      <div className="navdiv2">
      <img src={logo} alt="Perk Systems Inc" id="logo1" />
      <ul className="second-ul">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active-link' : ''}>About Us</Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
        </li>
        <li>
          <Link to="/clients" className={location.pathname === '/clients' ? 'active-link' : ''}>Clients</Link>
        </li>
        <li>
          <Link to="/careers" className={location.pathname === '/careers' ? 'active-link' : ''}>Careers</Link>
        </li>
        <li>
          <Link to="/contactus" className={location.pathname === '/contactus' ? 'active-link' : ''}>Contact Us</Link>
        </li>
      </ul>
      </div>
      </header>
            
        </div>
    );
};

export default Navigation;