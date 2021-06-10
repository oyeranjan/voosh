import React from "react";
import Slider from "react-slick"
import voosh_thali from "../../assets/image/voosh_thali.png"
import voosh_south from "../../assets/image/voosh_south.png"
import voosh_burger from "../../assets/image/voosh_burger.png"

const Cuisines = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid my-5">
      <div className="row cuisines justify-content-center p-4 pb-5">
        <p className="fs-50 text-center text-white pb-3">
          Available <font className="fw-bold fs-60">Cuisines</font>
        </p>
        <Slider {...settings} >
        <div className="col-sm-4 pb-5">
          <div class="card m-auto " style={{ width: "300px", height: "340px" }}>
            <img src={voosh_thali} class="card-img-top py-4 px-2" alt="..." />
            <div class="card-body ms-2 mt-n1">
              <p class="card-text fs-25 fw-bold">Voosh</p>
              <p class="card-text fs-4 fst-italic mt-n1">Thalis & Bowls</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card m-auto" style={{ width: "300px", height: "340px" }}>
            <img src={voosh_south} class="card-img-top py-4 px-2" alt="..." />
            <div class="card-body ms-2 mt-n1">
              <p class="card-text fs-25 fw-bold">Voosh</p>
              <p class="card-text fs-4 fst-italic mt-n1">Dakshin</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card m-auto" style={{ width: "300px", height: "350px" }}>
            <img src={voosh_burger} class="card-img-top py-4 px-2" alt="..." />
            <div class="card-body ms-2 mt-n1">
              <p class="card-text fs-25 fw-bold">Voosh</p>
              <p class="card-text fs-4 fst-italic mt-n1">
                Burgers & Sandwiches
              </p>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default Cuisines;
