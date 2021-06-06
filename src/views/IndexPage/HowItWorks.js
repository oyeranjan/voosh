import React from 'react'
import card_img from "./../../assets/image/chef cooking icon-min.png";
import arrow_left from "./../../assets/image/arrowLeft.svg";
import arrow_right from "./../../assets/image/arrowRight.svg";

const howItWorks = () => {
    return (
      <div>
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
                        Pick the cuisine sub brand you want to try- we have
                        fully realised cuisine concepts.
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
                <div className="row g-0">
                  <div className="col-md-4 m-auto">
                    <img
                      className="card-img"
                      src={card_img}
                      alt="..."
                      width="150px"
                    />
                  </div>
                  <div className="col-md-8 m-auto">
                    <div className="card-body">
                      <p className="card-text">
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
                <div className="row g-0">
                  <div className="col-md-4 m-auto">
                    <img
                      className="card-img"
                      src={card_img}
                      alt="..."
                      width="150px"
                    />
                  </div>
                  <div className="col-md-8 m-auto">
                    <div className="card-body">
                      <p className="card-text">
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
      </div>
    );
}

export default howItWorks
