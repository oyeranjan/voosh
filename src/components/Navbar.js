import React from "react";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid shadow bg-body rounded">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="...">
            <img
              className="d-inline-block"
              src="https://global-uploads.webflow.com/5fb3d7c02e824f6d31a73369/5fb3d98f76b7a1455113266b_logo.png"
              alt="brand-logo"
              width="119"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="...">
                  Meal Subscription
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="...">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="...">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex cart-icon">
            <span className="material-icons icon-color">shopping_cart</span>{" "}
            Cart <span className="badge bg-dark rounded-pill">0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
