import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="banner-carousel banner-carousel-1 mb-0">
        <div
          className="banner-carousel-item"
          style={{ backgroundImage: "url(/dist/img/landing/banner/bg1.jpg)" }}
        >
          <div className="slider-content">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12 text-center">
                  <h2 className="slide-title" data-animation-in="slideInLeft">
                    17 Years of excellence in
                  </h2>
                  <h3
                    className="slide-sub-title"
                    data-animation-in="slideInRight"
                  >
                    Construction Industry
                  </h3>
                  <p data-animation-in="slideInLeft" data-duration-in="1.2">
                    <a href="services.html" className="slider btn btn-primary">
                      Our Services
                    </a>
                    <a
                      href="contact.html"
                      className="slider btn btn-primary border"
                    >
                      Contact Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
