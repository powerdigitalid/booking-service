import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 className="widget-title">Tentng Kami</h3>
                <img loading="lazy" src="/dist/img/logo-1.png" alt="Constra" style={{height:"100px", width:"180px"}}/>
                {/* <span className="footer-logo"><h1>Logo Sementara</h1></span> */}
                <p>
                Sangan penting untuk memperhatikan kesehatan kendaraan anda, karena kesehatan kendaraan anda adalah prioritas kami.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com/themefisher"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/themefisher"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/themefisher"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/themefisher"
                        aria-label="Github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer social end */}
              </div>
              {/* Col end */}
              <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 className="widget-title">Jam Kerja</h3>
                <div className="working-hours">
                Kami bekerja 7 hari seminggu, setiap hari tidak termasuk hari libur besar. Hubungi kami jika Anda memiliki keadaan darurat, dengan Hotline dan formulir Kontak kami.
                  <br />
                  Senin - Jumat:
                  <span className="text-right">10:00 - 16:00 </span> <br />
                  Sabtu: <span className="text-right">
                    12:00 - 15:00
                  </span>{" "}
                  <br />
                  Minggu & Hari Libur:
                  <span className="text-right">09:00 - 12:00</span>
                </div>
              </div>
              {/* Col end */}
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 className="widget-title">Jasa</h3>
                <ul className="list-arrow">
                  <li>
                    <a href="service-single.html">Bengkel Online</a>
                  </li>
                  <li>
                    <a href="service-single.html">Pemesanan & Pemasangan Suku Cadang</a>
                  </li>
                  <li>
                    <a href="service-single.html">Desain Mesin & Body Kendaraan</a>
                  </li>
                  <li>
                    <a href="service-single.html">Servise Kendaraan Berat</a>
                  </li>
                  <li>
                    <a href="service-single.html">Bengkel Offline</a>
                  </li>
                </ul>
              </div>
              {/* Col end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Footer main end */}
      </footer>
    </div>
  );
}
