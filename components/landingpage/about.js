import React from "react";

export default function About() {
  return (
    <div>
      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                <h2 className="into-title">Tentang Kami</h2>
                <h3 className="into-sub-title">Kami memberikan pelayanan terbaik</h3>
                <p>
                  Kami memiliki impiyan yaitu membuat semua pelanggan kami puas dengan pelayanan kami. Kami berusaha untuk memberikan pelayanan terbaik kepada pelanggan kami. Karena kepuasan pelanggan adalah impiyan semua perusahaan.
                </p>
              </div>
              {/* Intro box end */}
              <div className="gap-20" />
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-trophy" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                      Kami Memiliki Reputasi Untuk Keunggulan
                      </h3>
                    </div>
                  </div>
                  {/* Service 1 end */}
                </div>
                {/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-sliders-h" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        Kami Membangun Kemitraan
                      </h3>
                    </div>
                  </div>
                  {/* Service 2 end */}
                </div>
                {/* col end */}
              </div>
              {/* Content row 1 end */}
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-thumbs-up" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        Dipandu oleh Komitmen dan Kepuasan Pelanggan
                      </h3>
                    </div>
                  </div>
                  {/* Service 1 end */}
                </div>
                {/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-users" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">
                        Tim proesional yang berpengalaman dan berdedikasi tinggi 
                      </h3>
                    </div>
                  </div>
                  {/* Service 2 end */}
                </div>
                {/* col end */}
              </div>
              {/* Content row 1 end */}
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="into-sub-title">Nilai Kita</h3>
              <p>
                Kami memiliki nilai cukup baik dimata pelanggan yang telah merasakan peyanan kami.
              </p>
              <div
                className="accordion accordion-group"
                id="our-values-accordion"
              >
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingOne"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Keamanan
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      Keamanan setiap kendaraan pelayan kami adalah prioritas kami. Kami selalu memastikan bahwa setiap kendaraan kami selalu dalam kondisi baik dan aman.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingTwo"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Pelayanan Pelanggan
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header p-0 bg-transparent"
                    id="headingThree"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Integritas
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#our-values-accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Accordion end */}
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </section>
    </div>
  );
}
