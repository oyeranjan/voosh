import React from 'react'
import Slider from "react-slick"
import quote from "../../assets/image/quote.svg"
import testmonial_1 from "../../assets/image/testimonial1.jpg"
import testmonial_2 from "../../assets/image/testimonial2.jpg"

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
        },
      },
    ],
  };
    return (
      <div className="my-5 testimonial">
        <p className="text-secondary text-center fs-60">Testimonials</p>
        <div className="container-fluid pb-5 bg-color1">
          <Slider {...settings}>
            <div className="row py-4">
              <div className="row quote">
                <img className="m-auto" id="quote" src={quote} alt="quote" />
              </div>

              <div className="col-sm w-50 shadow bg-white m-auto t-card">
                <p className="fs-25 px-5 pt-5 text-center m-0">
                  Voosh has helped us increase our daily orders, improve safety
                  and hygiene of our kitchen through regular audits and has
                  motivated our staff to perform better through their trainings
                  and certifications.
                </p>
                <div className="row mx-3 t-card-footer py-4">
                  <div className="col-3">
                    <img
                      className="rounded-circle"
                      src={testmonial_1}
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <div className="w-75"></div>
                    <p className="fs-5 pt-4">Saleem Javed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="row quote">
                <img className="m-auto" id="quote" src={quote} alt="quote" />
              </div>

              <div className="col-sm w-50 shadow bg-white m-auto t-card">
                <p className="fs-25 px-5 pt-5 text-center m-0">
                  Voosh has empowered my kitchen with best food preparation
                  practices, world class technologies and intelligence around
                  menu design and pricing.
                </p>
                <div className="row mx-3 t-card-footer py-4">
                  <div className="col-3">
                    <img
                      className="rounded-circle"
                      src={testmonial_2}
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <div className="w-75"></div>
                    <p className="fs-5 pt-4">Naveen Singh</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
}

export default Testimonials
