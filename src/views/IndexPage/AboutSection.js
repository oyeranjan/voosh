import React from 'react'

const aboutSection = () => {
    return (
      <>
        <div className="row bg-primary-voosh section-3 align-items-center p-5">
          <div className="col-sm">
            <p className="fs-60 text-white m-0">What is</p>
            <p className="fs-70 text-white fw-bold"> Voosh?</p>
            <p className="fs-5 text-white pt-3">
              Voosh is a restaurant brand curator, leading the industry with top
              of the line virtual restaurant brands built to drive revenue. We
              help you maximize your kitchen profits by adding a virtual
              restaurant brand to your capabilities.
            </p>
          </div>
          <div className="col-sm">
            <div className="text-center">
              <iframe
                src="https://www.youtube.com/embed/CtYK3bNzRN4?controls=0"
                title="What is Voosh?"
                frameBorder="2"
                rel="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
}

export default aboutSection
