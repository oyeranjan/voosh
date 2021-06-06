import React from 'react'

const testimonials = () => {
    return (
      <div>
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
            className="carousel slide w-50 m-auto shadow bg-body rounded"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-inner bg-white w-100">
              <div className="carousel-item active px-5 py-2">
                <span className="material-icons icon-color fs-1">format_quote</span>
                <p className="text-secondary" style={{ fontSize: "18px" }}>
                  Voosh has helped us increase our daily orders, improve safety
                  and hygiene of our kitchen through regular audits and has
                  motivated our staff to perform better through their trainings
                  and certifications.
                </p>
                <img
                  src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbddec3b250ad1278be113b_db0a724c-c9d1-4ade-8782-bf6822f1086f.jpg"
                  className="rounded-circle py-3"
                  alt="..."
                  width="80px"
                />
                <p className="text-dark fw-bold">Saleem Javed</p>
              </div>
              <div className="carousel-item px-5 py-2">
                <span className="material-icons icon-color fs-1">format_quote</span>
                <p className="text-secondary" style={{ fontSize: "18px" }}>
                  Voosh has empowered my kitchen with best food preparation
                  practices, world class technologies and intelligence around
                  menu design and pricing.
                </p>
                <img
                  src="https://global-uploads.webflow.com/5fba42df68f67bf06d36211d/5fbddfc943adc0a85aa02a68_sdf-p-500.jpeg"
                  className="rounded-circle py-3"
                  alt="..."
                  width="80px"
                />
                <p className="text-dark fw-bold">Naveen Singh</p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              style={{ marginLeft: "-45px" }}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <div
                className="carousel-control-prev-icon shadow-lg bg-body m-auto rounded-circle"
                aria-hidden="true"
              >
                <span className="material-icons icon-color fs-2">
                  navigate_before
                </span>
              </div>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              style={{ marginRight: "-45px" }}
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <div
                className="carousel-control-next-icon shadow-lg bg-body m-auto rounded-circle"
                aria-hidden="true"
              >
                <span className="material-icons icon-color fs-2">
                  navigate_next
                </span>
              </div>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default testimonials
