import React from "react";
import card_img from "./../../assets/image/chef cooking icon-min.png";
import arrow_left from "./../../assets/image/arrowLeft.svg";
import arrow_right from "./../../assets/image/arrowRight.svg";
import consumer_survey from "./../../assets/image/Consumer survey.jpg";

const HomeScreen = () => {
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
                <span className="material-icons icon-color">check_circle</span>
                <p className="ps-3">No extra cost.</p>
              </div>
              <div className="d-flex">
                <span className="material-icons icon-color">check_circle</span>
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
              Become a part of Voosh brand and get best ROI on your fixed assets
              and high conversions across food delivery platforms.
            </p>
            <div className="d-flex features mt-5">
              <span className="material-icons icon-color">trending_up</span>
              <p className="ps-3 pt-2 text-dark">Increase restaurant income</p>
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
      {/* Section 3 Starts */}
      <div className="row bg-light align-items-center font-circular">
        <p className="text-center heading">What is Voosh?</p>
        <div className="col-sm">
          <p className="text-sm-start px-2 fs-3 text-secondary py-auto">
            <font className="fw-bold fs-1 theme-color1">Voosh</font> is a
            restaurant brand curator, leading the industry with top of the line
            virtual restaurant brands built to drive revenue. We help you
            maximize your kitchen profits by adding a virtual restaurant brand
            to your capabilities.
          </p>
        </div>
        <div className="col-sm">
          <div className="text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CtYK3bNzRN4?controls=0"
              title="What is Voosh?"
              frameborder="2"
              rel="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <img
          src="https://www.optimumlevel.in/images/shapes/round-white.png"
          alt="divider"
          width="100%"
        />
      </div>
      <div className="row align-items-center font-circular">
        <div className="row">
          <p className="text-center heading">How it works?</p>
          <div className="col-9 ms-auto pb-5 d-flex">
            <div className="card how-it-works">
              <div className="row g-0">
                <div className="col-md-4 m-auto">
                  <img className="card-img" src={card_img} alt="..." />
                </div>
                <div className="col-md-8 m-auto">
                  <div className="card-body">
                    <p className="card-text">
                      Pick the cuisine sub brand you want to try- we have fully
                      realised cuisine concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <img src={arrow_right} alt="arrow" className="arrow" />
            </div>
          </div>
          <div className="col-9 ms-auto pb-5 d-flex">
            <div className="mt-5">
              <img src={arrow_left} alt="arrow" />
            </div>
            <div className="card how-it-works">
              <div class="row g-0">
                <div class="col-md-4 m-auto">
                  <img
                    className="card-img"
                    src={card_img}
                    alt="..."
                    width="150px"
                  />
                </div>
                <div class="col-md-8 m-auto">
                  <div class="card-body">
                    <p class="card-text">
                      Leverage existing staff, equipments and real estate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ms-auto pb-5 d-flex">
            <div className="card how-it-works">
              <div className="row g-0">
                <div className="col-md-4 m-auto">
                  <img className="card-img" src={card_img} alt="..." />
                </div>
                <div className="col-md-8 m-auto">
                  <div className="card-body">
                    <p className="card-text">
                      Have your kitchen staff trained to the best practises as
                      they learn our standardised and easy to cook recipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <img src={arrow_right} alt="arrow" className="arrow" />
            </div>
          </div>
          <div className="col-9 ms-auto pb-5 d-flex">
            <div className="mt-5">
              <img src={arrow_left} alt="arrow" />
            </div>
            <div className="card how-it-works">
              <div class="row g-0">
                <div class="col-md-4 m-auto">
                  <img
                    className="card-img"
                    src={card_img}
                    alt="..."
                    width="150px"
                  />
                </div>
                <div class="col-md-8 m-auto">
                  <div class="card-body">
                    <p class="card-text">
                      Allow Voosh to help you optimise your kitchen hygiene to
                      best practise standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ms-auto pb-5 d-flex">
            <div className="card how-it-works">
              <div className="row g-0">
                <div className="col-md-4 m-auto">
                  <img className="card-img" src={card_img} alt="..." />
                </div>
                <div className="col-md-8 m-auto">
                  <div className="card-body">
                    <p className="card-text">
                      Generate additional income without added overhead with
                      training and kitchen optimisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container font-circular">
        <p className="text-center heading pb-3">What Voosh offers you?</p>
        <div className="row offerings">
          <ul
            class="nav nav-pills nav-justified mx-5"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item mx-5" role="presentation">
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
            <li class="nav-item mx-5" role="presentation">
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
            <li class="nav-item mx-5" role="presentation">
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
                  Our concepts are developed through data. We identify the most
                  craved cuisines and create sub-brands your customers want.
                  When developing our sub-brand and menus, we look at:
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
                  src={consumer_survey}
                  alt="consumer-survey"
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
                  src={consumer_survey}
                  alt="consumer-survey"
                  width="400px"
                />
              </div>
              <div className="col-sm m-auto">
                <p className="text-secondary fs-5">
                  Low-Risk, high-return opportunity to take your business to the
                  next level!
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
      <div className="font-circular text-center testimonial pb-5">
        <div className="m-auto w-50 py-5">
          <p className="text-white heading">What our partners are saying</p>
          <p className="text-white px-5" style={{ fontSize: "18px" }}>
            Our kitchen partners are delighted about the extra revenue that
            Voosh is providing them. Read all about it!
          </p>
        </div>

        <div
          id="carouselExampleControls"
          class="carousel slide w-50 m-auto shadow bg-body rounded"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div class="carousel-inner bg-white w-100">
            <div class="carousel-item active px-5 py-2">
              <span class="material-icons icon-color fs-1">format_quote</span>
              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Voosh has helped us increase our daily orders, improve safety
                and hygiene of our kitchen through regular audits and has
                motivated our staff to perform better through their trainings
                and certifications.
              </p>
              <img
                src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbddec3b250ad1278be113b_db0a724c-c9d1-4ade-8782-bf6822f1086f.jpg"
                class="rounded-circle py-3"
                alt="..."
                width="80px"
              />
              <p className="text-dark fw-bold">Saleem Javed</p>
            </div>
            <div class="carousel-item px-5 py-2">
              <span class="material-icons icon-color fs-1">format_quote</span>
              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Voosh has empowered my kitchen with best food preparation
                practices, world class technologies and intelligence around menu
                design and pricing.
              </p>
              <img
                src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbddfc943adc0a85aa02a68_sdf-p-500.jpeg"
                class="rounded-circle py-3"
                alt="..."
                width="80px"
              />
              <p className="text-dark fw-bold">Naveen Singh</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            style={{ marginLeft: "-45px" }}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <div
              class="carousel-control-prev-icon shadow-lg bg-body m-auto rounded-circle"
              aria-hidden="true"
            >
              <span class="material-icons icon-color fs-2">
                navigate_before
              </span>
            </div>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            style={{ marginRight: "-45px" }}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <div
              class="carousel-control-next-icon shadow-lg bg-body m-auto rounded-circle"
              aria-hidden="true"
            >
              <span class="material-icons icon-color fs-2">navigate_next</span>
            </div>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
