import React from "react";

export default function Services() {
  return (
    <div>
      <section id="ts-service-area" className="ts-service-area pb-0">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="section-title">Kami Sepesialis Dalam</h2>
              <h3 className="section-sub-title">Apa Yang Kami Lakukan</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className="row">
            <div className="col-lg-4">
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon1.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Pesan Layanan Dari Rumah</a>
                  </h3>
                  <p>
                    Pelanggan dapat memesan layanan dari rumah tanpa harus datang ke bengkel
                  </p>
                </div>
              </div>
              {/* Service 1 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon2.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Terima Pemesanan & Pemasangan Suku Cadang</a>
                  </h3>
                  <p>
                    Menerima pemesanan dan pemasangan suku cadang yang dibutuhkan
                  </p>
                </div>
              </div>
              {/* Service 2 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon3.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Desain Custom Mesin</a>
                  </h3>
                  <p>
                    Custom mesin sesuai dengan kebutuhan pelanggan
                  </p>
                </div>
              </div>
              {/* Service 3 end */}
            </div>
            {/* Col end */}
            <div className="col-lg-4 text-center">
              <img
                loading="lazy"
                className="img-fluid"
                src="/dist/img/landing/logo-bengkel.png" 
                alt="service-avater-image"
              />
            </div>
            {/* Col end */}
            <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon4.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Desain body</a>
                  </h3>
                  <p>
                    Desain body kendaraan sesuai dengan kebutuhan pelanggan
                  </p>
                </div>
              </div>
              {/* Service 4 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon5.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Merima Kendaraan Berat</a>
                  </h3>
                  <p>
                    Kendaraan berat yang bermasalah dapat dibawa ke bengkel
                  </p>
                </div>
              </div>
              {/* Service 5 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="/dist/img/landing/icon-image/service-icon6.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Mementingkan Keamanan</a>
                  </h3>
                  <p>
                    Semua yang ada di bengkel akan dijaga keamanannya, baik itu kendaraan maupun suku cadang
                  </p>
                </div>
              </div>
              {/* Service 6 end */}
            </div>
            {/* Col end */}
          </div>
          {/* Content row end */}
        </div>
        {/*/ Container end */}
      </section>
    </div>
  );
}
