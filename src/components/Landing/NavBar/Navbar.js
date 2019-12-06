import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './Logo.png';
import QLogo from './Q_icon.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link  className="navbar-brand pt-3 pl-5" to="/">
        <img src={QLogo} className="qlogo text-white" alt="LOGO"/>
        <img src={Logo} className="logo pl-1 pt-2 text-white" alt="QLOGO"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars icon"></i>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">

          <li className="nav-item">
            <Link  className="nav-link pr-5" to="/shop">
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link pr-5" to="/shop">
              PORTFOLIO
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link pr-5" to="/shop">
              OUR TEAM
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link pr-5"  to="/shop">
              CONTACT US
            </Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link pr-5" to="/shop">
              ABOUT US!
            </Link>
          </li>
          
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar;
