import React from "react";
import logo from "../assets/image/Voosh-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky navbar-expand-lg navbar-light bg-primary-voosh" style={{zIndex:2}}>
        <div className="container-fluid">
          <p className="navbar-brand"></p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="...">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="...">
                  Meal Subscription
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="...">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="logo bg-primary-voosh" style={{zIndex:2}}>
        <img src={logo} alt="brand-logo" width="200" />
      </div>
    </div>
  );
};

export default Navbar;
