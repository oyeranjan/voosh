import React from 'react'
import LandingImage from '../../assets/image/voosh_1.gif'

const landingSection = () => {
    return (
      <>
        <div className="container-fluid home">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 order-2 order-lg-1">
              <div className="hero-text">
                <p className="fs-70 mb-4">
                  A MULTI-CUISINE<br/>
                  <font className="fw-bold theme-color1">
                    DIGITAL
                    <br /> RESTURANT
                    <br />
                  </font>{" "}
                  FAMILY.
                </p>
                <p className="fs-30 text-secondary">No extra cost.</p>
                <p className="fs-30 text-secondary">Higher revenue.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-1 order-lg-2 pb-3">
              <img className="img-fluid" src={LandingImage} alt="landing-img" />
            </div>
          </div>
        </div>
        <div className="row py-5 my-5 section-2">
          <div className="col-sm text-center my-5">
            <p className="fs-50 m-0">Are You A Kitchen Looking To</p>
            <p className="fs-50 p2 fw-bold theme-color1">
              Maximize Your Revenue?
            </p>
            <p className="text-black fw-light fs-5">
              Become a part of Voosh brand and get best ROI on your fixed assets
              and high conversions<br /> across food delivery platforms.
            </p>
            <button className="btn btn-lg text-white bg-primary-voosh my-4">
              Become a partner
            </button>
          </div>
        </div>
      </>
    );
}

export default landingSection
