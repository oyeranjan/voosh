import React from "react";
import logo from "../assets/image/Voosh-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar sticky navbar-expand-lg navbar-light bg-primary-voosh" style={{zIndex:2}}>
        <div class="container-fluid">
          <p class="navbar-brand"></p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="...">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="...">
                  Meal Subscription
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="...">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="logo bg-primary-voosh" style={{zIndex:2}}>
        <img src={logo} alt="brand-logo" width="250" />
      </div>

      {/* <nav classNameName="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div classNameName="container-fluid shadow bg-body rounded">
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <a classNameName="navbar-brand" href="...">
            <img
              classNameName="d-inline-block"
              src="https://global-uploads.webflow.com/5fb3d7c02e824f6d31a73369/5fb3d98f76b7a1455113266b_logo.png"
              alt="brand-logo"
              width="119"
            />
          </a>
          <div classNameName="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link" aria-current="page" href="...">
                  Meal Subscription
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="...">
                  About us
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="...">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
