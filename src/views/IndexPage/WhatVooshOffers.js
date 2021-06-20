import React from "react"
import consumer_insight from "./../../assets/image/consumer_insight.png"
import expert_branding from "./../../assets/image/expert_branding.png"
import low_risk from "./../../assets/image/Revenue-Graph.gif"
import tech_emp from "./../../assets/image/tech_emp.png"

const whatVooshOffers = () => {
  return (
    <>
      <div className="container-fluid section-5 px-5 mt-5">
        <p className="text-center fs-50">
          What Voosh offers <font>you?</font>
        </p>
        <div className="row mx-5 offerings">
          <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
            <li className="w-25 nav-item" role="presentation">
              <button
                className="nav-link active"
                id="consumer_i-tab"
                data-bs-toggle="tab"
                data-bs-target="#consumer_i"
                aria-controls="consumer_i"
              >
                Consumer Insights
              </button>
            </li>
            <li className="w-25 nav-item" role="presentation">
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
            <li className="w-25 nav-item" role="presentation">
              <button
                className="nav-link"
                id="risk-tab"
                data-bs-toggle="tab"
                data-bs-target="#risk"
                aria-controls="risk"
              >
                Low Risks
              </button>
            </li>
            <li className="w-25 nav-item" role="presentation">
              <button
                className="nav-link"
                id="tech-tab"
                data-bs-toggle="tab"
                data-bs-target="#tech"
                aria-controls="tech"
              >
                Tech Empowerment
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-color1 section-5-b px-5">
        <div className="tab-content m-5" id="myTabContent">
          <div
            className="tab tab-pane fade show active"
            id="consumer_i"
            role="tabpanel"
            aria-labelledby="consumer_i-tab"
          >
            <div className="row">
              <div className="col-sm m-auto">
                <p className="theme-color1 text-start fw-bold fs-50 m-0">
                  Consumer
                </p>
                <p className="theme-color1 text-start fw-bold fs-50 mt-n1 ">
                  Insights
                </p>
                <p className="text-black text-start fs-6">
                  Our concepts are developed through data. We identify the most
                  craved cuisines and create sub-brands your customers want.{" "}
                  <br />
                  <br />
                  When developing our sub-brand and menus, we look at:
                </p>
                <div className="text-start pt-3">
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Customer demographics
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Top selling menu items
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Dynamic pricing by demographics
                  </p>
                </div>
              </div>
              <div className="col-sm text-center">
                <img
                  className="img-fluid py-4"
                  src={consumer_insight}
                  alt="consumer-survey"
                />
              </div>
            </div>
          </div>
          <div
            className="tab tab-pane fade"
            id="branding"
            role="tabpanel"
            aria-labelledby="branding-tab"
          >
            <div className="row">
              <div className="col-sm">
                <p className="theme-color1 text-start fw-bold fs-50 m-0">
                  Expert
                </p>
                <p className="theme-color1 text-start fw-bold fs-50 mt-n1 ">
                  Branding
                </p>
                <p className="text-black text-start fs-6">
                  Voosh offers you fully realised high-level branding that is
                  capable of competing with bigger food chains.
                </p>
                <div className="text-start pt-3">
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    A dedicated social media team
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Ground level branding via packaging & offline activations
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Referral campaigns to attract more customers
                  </p>
                </div>
              </div>
              <div className="col-sm text-center">
                <img
                  className="img-fluid py-4"
                  src={expert_branding}
                  alt="expert branding"
                />
              </div>
            </div>
          </div>
          <div
            className="tab tab-pane fade"
            id="risk"
            role="tabpanel"
            aria-labelledby="risk-tab"
          >
            <div className="row">
              <div className="col-sm">
                <p className="theme-color1 text-start fw-bold fs-50 m-0">Low</p>
                <p className="theme-color1 text-start fw-bold fs-50 mt-n1 ">
                  Risks
                </p>
                <p className="text-black text-start fs-6">
                  Low-Risk, high-return opportunity to take your business to the
                  next level!
                </p>
                <div className="text-start pt-3">
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Leverage your fixed costs
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Increase your profit margins
                  </p>
                  <p className="ps-4 fs-7 text-secondary">
                    <i
                      className="fa fa-play me-2 theme-color1"
                      aria-hidden="true"
                    ></i>
                    Get started in 30 days or less!
                  </p>
                </div>
              </div>
              <div className="col-sm text-center">
                <img src={low_risk} alt="Low risk" className="img-fluid py-4" />
              </div>
            </div>
          </div>
          <div
            className="tab tab-pane fade"
            id="tech"
            role="tabpanel"
            aria-labelledby="tech-tab"
          >
            <div className="row">
              <div className="col-sm">
                <p className="theme-color1 text-start fw-bold fs-50 m-0">
                  Tech
                </p>
                <p className="theme-color1 text-start fw-bold fs-50 mt-n1 ">
                  Empowerment
                </p>
                <p className="text-black text-start fs-6">
                  Order management system
                </p>
              </div>
              <div className="col-sm text-center ">
                <img
                  src={tech_emp}
                  className="img-fluid py-4"
                  alt="consumer-survey"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default whatVooshOffers;
