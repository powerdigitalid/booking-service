import React from "react";

export default function Tagline() {
  return (
    <div>
      <section className="call-to-action-box no-padding">
        <div className="container">
          <div className="action-style-box">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-left">
                <div className="call-to-action-text">
                  <h3 className="action-title">
                    We understand your needs on construction
                  </h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                <div className="call-to-action-btn">
                  <a className="btn btn-dark" href="#">
                    Request Quote
                  </a>
                </div>
              </div>
              {/* col end */}
            </div>
            {/* row end */}
          </div>
          {/* Action style box */}
        </div>
        {/* Container end */}
      </section>
    </div>
  );
}
