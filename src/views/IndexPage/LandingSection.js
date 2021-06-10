import React from 'react'

const landingSection = () => {
    return (
      <>
        <div className="container-fluid home">
          <div className="row align-items-center hero-section">
            <div className="col-lg-6 col-sm-12 order-2 order-lg-1">
              <div className="ms-5">
                <p className="fs-70 mb-4">
                  A MULTI-CUISINE{" "}
                  <font className="fw-bold theme-color1">
                    DIGITAL RESTURANT
                  </font>{" "}
                  FAMILY.
                </p>
                <p className="fs-35 text-secondary">No extra cost.</p>
                <p className="fs-35 text-secondary">Higher revenue.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-1 order-lg-2">
              <img
                className="img-fluid"
                src="https://www.masalabox.com/bangalore/css/aboutus/MB_WEB_SAFETY_GUIDELINES_PAGE_1_IMG2-min.jpg"
                alt="landing-img"
              />
            </div>
          </div>
        </div>
        {/* Section 1 Ends */}
        {/* Section 2 Starts */}
        <div className="row pt-3 my-5 section-2">
          <div className="col-sm text-center">
            <p className="fs-50 m-0">Are You A Kitchen Looking To</p>
            <p className="fs-50 p2 fw-bold theme-color1">Maximize Your Revenue?</p>
            <p className="text-black fw-light fs-5">
              Become a part of Voosh brand and get best ROI on your fixed assets
              and high conversions across food delivery platforms.
            </p>
            <button className="btn btn-lg text-white bg-primary-voosh my-4">
              Become a partner
            </button>
          </div>
        </div>
        {/* Section 2 Ends */}
      </>
    );
}

export default landingSection
