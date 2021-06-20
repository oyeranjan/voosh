import React from 'react'
import Slider from 'react-slick'
import work_process_1 from "./../../assets/image/work_process_1.png";
import work_process_2 from "./../../assets/image/work_process_2.png";
import work_process_3 from "./../../assets/image/work_process_3.png";
import work_process_4 from "./../../assets/image/work_process_4.png";
import work_process_5 from "./../../assets/image/work_process_5.png";

const howItWorks = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    return (
      <div className="container-fluid section-4 mb-5 bg-color1">
        <div className="row bg-color1">
          <p className="text-center fs-50 m-0 pt-4">How It</p>
          <p className="text-center text-secondary fw-bold fs-70">Works?</p>
        </div>
        <div className="bg-color1 px-3 py-5">
        <Slider {...settings}>
          <div className="text-center">
            <img className="img-fluid" src={work_process_1} alt="..."></img>
            <p className="mt-4 fw-bold text-secondary fs-20">Available Cusine Options</p>
            <ul className="mt-4 text-start light-text">
              <li>Pick the cuisine sub brand you want to try</li>
              <li>We have fully realised cuisine concepts</li>
            </ul>
          </div>
          <div className="text-center">
            <img className="img-fluid" src={work_process_2} alt="..."></img>
            <p className="mt-4 fw-bold text-secondary fs-20">No Additional Expenditure</p>
            <ul className="mt-4 text-start light-text">
              <li>Leverage existing staff, equipments and real estate</li>
            </ul>
          </div>
          <div className="text-center">
            <img className="img-fluid"  src={work_process_3} alt="..."></img>
            <p className="mt-4 fw-bold text-secondary fs-20">
              Standardised Recipies
            </p>
            <ul className="mt-4 text-start light-text">
              <li>Kitchen staff trained to the best practises </li>
              <li>Learn our standardised, easy to cook recipes</li>
            </ul>
          </div>
          <div className="text-center">
            <img className="img-fluid"  src={work_process_4} alt="..."></img>
            <p className="mt-4 fw-bold text-secondary fs-20">Optimize Kitchen Hygiene</p>
            <ul className="mt-4 text-start light-text">
              <li>Optimise your kitchen hygiene with Voosh</li>
              <li>Increase to best practise standards</li>
            </ul>
          </div>
          <div className="text-center">
            <img className="img-fluid"  src={work_process_5} alt="..."></img>
            <p className="mt-4 fw-bold text-secondary fs-20">
              Additional Income
            </p>
            <ul className="mt-4 text-start light-text">
              <li>Generate additional income</li>
              <li>No added overhead</li>
              <li>Training and kitchen optimisation Included</li>
            </ul>
          </div>
          </Slider>
        </div>
      </div>
    );
}

export default howItWorks
