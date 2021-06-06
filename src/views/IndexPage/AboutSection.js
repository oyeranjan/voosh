import React from 'react'

const aboutSection = () => {
    return (
      <div>
        <div className="row bg-light align-items-center font-circular">
          <p className="text-center heading">What is Voosh?</p>
          <div className="col-sm">
            <p className="text-sm-start px-2 fs-3 text-secondary py-auto">
              <font className="fw-bold fs-1 theme-color1">Voosh</font> is a
              restaurant brand curator, leading the industry with top of the
              line virtual restaurant brands built to drive revenue. We help you
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
                frameBorder="2"
                rel="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <img
            src="https://www.optimumlevel.in/images/shapes/round-white.png"
            alt="divider"
            width="100%"
          />
        </div>
      </div>
    );
}

export default aboutSection
