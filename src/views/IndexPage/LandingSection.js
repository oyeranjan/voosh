import React from 'react'

const landingSection = () => {
    return (
      <div>
        {/* Section 1 Starts */}
        <div className="container-fluid home">
          <div className="row align-items-center hero-section font-circular">
            <div className="col-sm">
              <div className="ms-2">
                <h2 className="heading mb-3">
                  A multi-cuisine digital restaurant family.
                </h2>
                <div className="d-flex">
                  <span className="material-icons icon-color">
                    check_circle
                  </span>
                  <p className="ps-3">No extra cost.</p>
                </div>
                <div className="d-flex">
                  <span className="material-icons icon-color">
                    check_circle
                  </span>
                  <p className="ps-3">Higher revenue.</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
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
        <div>
          <img
            src="https://www.optimumlevel.in/images/shapes/round-light.png"
            alt="divider"
            width="100%"
          />
          <div className="row bg-light pt-3">
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbbaaec7cdd632a8334d503_Frame%203.png"
                alt="voosh-kitchen"
              />
            </div>
            <div className="col-sm ms-2">
              <h2 className="fw-bold heading-2">
                Are you a kitchen looking to maximize your profits?
              </h2>
              <p className="text-secondary">
                Become a part of Voosh brand and get best ROI on your fixed
                assets and high conversions across food delivery platforms.
              </p>
              <div className="d-flex features mt-5">
                <span className="material-icons icon-color">trending_up</span>
                <p className="ps-3 pt-2 text-dark">
                  Increase restaurant income
                </p>
              </div>
              <div className="d-flex features mt-3">
                <span className="material-icons icon-color">engineering</span>
                <p className="ps-3 pt-2 text-dark">Use top notch technology</p>
              </div>
              <div className="d-flex features mt-3">
                <span className="material-icons icon-color">content_cut</span>
                <p className="ps-3 pt-2 text-dark">Cut down your cost</p>
              </div>
              <button className="btn btn-partner mt-5 ms-2 text-white">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
        {/* Section 2 Ends */}
      </div>
    );
}

export default landingSection
