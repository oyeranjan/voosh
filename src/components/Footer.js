import React from 'react'

const Footer = () => {
    return (
      <div className="font-circular" style={{ backgroundColor: "#1E2833" }}>
        <div className="row">
          <div className="col-4 px-5 py-4">
            <img
              src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbb6f675977972d9d68a2c0_logo%20svg.svg"
              alt="..."
              width="100px"
            />
            <p className="text-white py-4">
              Satisfy all your cravings with just one Voosh.

            </p>
            
          </div>
          <div className="col-4 p-4">
            <p className="text-white fs-3">Quick Links</p>
            <div className="d-flex">
              <span className="material-icons icon-color">chevron_right</span>
              <p className="ps-3 text-white">Home</p>
            </div>
            <div className="d-flex">
              <span className="material-icons icon-color">chevron_right</span>
              <p className="ps-3 text-white">About us</p>
            </div>
            <div className="d-flex">
              <span className="material-icons icon-color">chevron_right</span>
              <p className="ps-3 text-white">Become a Partner</p>
            </div>
          </div>
          <div className="col-4 p-4 text-white">
            <p className="fs-3">Get in touch</p>
            <p>
              <i className="fa fa-phone fa-rotate-90 me-2 "></i> +91-9876543210
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i> contact@voosh.in
            </p>
            <p className="pt-3">
              <i className="fa fa-facebook mx-3"></i>
              <i className="fa fa-linkedin mx-3"></i>
              <i className="fa fa-instagram mx-3"></i>
            </p>
          </div>
        </div>
        <hr style={{color:"whitesmoke"}}/>
        <div className="row mx-5">
          <p className="text-white">Copyright © 2021 Voosh</p>
        </div>
      </div>
    );
}

export default Footer
