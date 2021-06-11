import React from "react";
import voosh_map from "../../assets/image/voosh_map.png";
import capex from "../../assets/image/capex.png"

const MapCapex = () => {
  return (
    <>
      <div
        className="container-fluid map bg-primary-voosh"
        style={{ marginTop: "5rem" }}
      >
        <div className="row py-5 ">
          <div className="col-sm">
            <p className="text-white text-start fs-70 m-0  text-center">
              Where Are We
            </p>
            <p className="text-white text-start fw-bold fs-80 mt-n1 text-center ">
              Located?
            </p>
          </div>
          <div className="col-sm m-auto text-center m-auto">
            <img
              className="img-fluid"
              src={voosh_map}
              alt="consumer-survey"
              id="voosh_map"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-color2">
        <div className="row">
          <div className="col-sm m-auto text-center m-auto">
            <img
              className="ms-5 img-fluid capex"
              src={capex}
              alt="consumer-survey"
              width="70%"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm text-center">
            <button className="btn btn-lg p-btn text-white bg-primary-voosh my-5">
              Become a partner
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapCapex;
