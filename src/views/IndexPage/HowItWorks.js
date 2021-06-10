import React from 'react'
import work_process_1 from "./../../assets/image/work_process_1.png";
import work_process_2 from "./../../assets/image/work_process_2.png";
import work_process_3 from "./../../assets/image/work_process_3.png";
import work_process_4 from "./../../assets/image/work_process_4.png";
import work_process_5 from "./../../assets/image/work_process_5.png";

const howItWorks = () => {
    return (
      <div className="container-fluid section-4">
        <div className="row">
          <p className="text-center fs-50 m-0 pt-4">How It</p>
        </div>
        <div className="row bg-color1">
          <p className="text-center text-secondary fw-bold fs-70">Works?</p>
        </div>
        <div className="row bg-color1 justify-content-center text-center p-2">
          <div className="col-lg-2 col-sm-6">
            <img className="img-fluid" src={work_process_1} alt="..."></img>
            <p className="mt-4">
              Pick the cuisine sub brand you want to try- we have fully realised
              cuisine concepts
            </p>
          </div>
          <div className="col-lg-2 col-sm-6">
            <img className="img-fluid" src={work_process_2} alt="..."></img>
            <p className="mt-4">
              Leverage existing staff, equipments and real estate
            </p>
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={work_process_3} alt="..."></img>
            <p className="mt-4">
              Have your kitchen staff trained to the best practises as they
              learn our standardised and easy to cook recipes
            </p>
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={work_process_4} alt="..."></img>
            <p className="mt-4">
              Allow Voosh to help you optimise your kitchen hygiene to best
              practise standards
            </p>
          </div>
          <div className="col-lg-2 col-sm-6">
            <img src={work_process_5} alt="..."></img>
            <p className="mt-5">
              Generate additional income without added overhead with training
              and kitchen optimisation
            </p>
          </div>
        </div>
      </div>
    );
}

export default howItWorks
