import React from 'react'
import consumer_survey from "./../../assets/image/Consumer survey.jpg";
import branding from "./../../assets/image/branding.png";
import low_risk from "./../../assets/image/low_risk.jpg";

const whatVooshOffers = () => {
    return (
      <div>
        <div className=" container font-circular">
          <p className="text-center heading pb-3">What Voosh offers you?</p>
          <div className="row offerings">
            <ul
              className="nav nav-pills nav-justified mx-5"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item mx-5" role="presentation">
                <button
                  className="nav-link active rounded"
                  id="consumer_i-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#consumer_i"
                  aria-controls="consumer_i"
                >
                  Consumer Insights
                </button>
              </li>
              <li className="nav-item mx-5" role="presentation">
                <button
                  className="nav-link"
                  id="branding-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#branding"
                  aria-controls="branding"
                >
                  Expert Branding
                </button>
              </li>
              <li className="nav-item mx-5" role="presentation">
                <button
                  className="nav-link"
                  id="risk-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#risk"
                  aria-controls="risk"
                >
                  Low-risk
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab tab-pane fade show active"
              id="consumer_i"
              role="tabpanel"
              aria-labelledby="consumer_i-tab"
            >
              <div className="row mt-5">
                <div className="col-sm m-ato">
                  <img
                    src={consumer_survey}
                    alt="consumer-survey"
                    width="400px"
                  />
                </div>
                <div className="col-sm m-auto">
                  <p className="text-secondary fs-5">
                    Our concepts are developed through data. We identify the
                    most craved cuisines and create sub-brands your customers
                    want. When developing our sub-brand and menus, we look at:
                  </p>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Customer demographics</p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Top selling menu items</p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Dynamic pricing by demographics</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab tab-pane fade"
              id="branding"
              role="tabpanel"
              aria-labelledby="branding-tab"
            >
              <div className="row mt-5">
                <div className="col-sm m-auto">
                  <img
                    src={branding}
                    alt="expert brading"
                    width="400px"
                  />
                </div>
                <div className="col-sm m-auto">
                  <p className="text-secondary fs-5">
                    Voosh offers you fully realised high-level branding that is
                    capable of competing with bigger food chains.
                  </p>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">A dedicated social media team</p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">
                      Ground level branding via packaging & offline activations
                    </p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">
                      Referral campaigns to attract more customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab tab-pane fade"
              id="risk"
              role="tabpanel"
              aria-labelledby="risk-tab"
            >
              <div className="row mt-5">
                <div className="col-sm m-auto">
                  <img
                    src={low_risk}
                    alt="low risk"
                    width="400px"
                  />
                </div>
                <div className="col-sm m-auto">
                  <p className="text-secondary fs-5">
                    Low-Risk, high-return opportunity to take your business to
                    the next level!
                  </p>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Leverage your fixed costs</p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Increase your profit margins</p>
                  </div>
                  <div className="d-flex">
                    <span className="material-icons icon-color">
                      check_circle
                    </span>
                    <p className="ps-3">Get started in 30 days or less!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default whatVooshOffers
