import React from "react";

export default function Navbar() {
  return (
    <div>
      <header id="header" className="header-one">
        <div className="bg-white">
          <div className="container">
            <div className="logo-area"> 
              <div className="row align-items-center">
                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                  <a className="d-block" href="index.html">
                    <img loading="lazy" src="/dist/img/logo.png" alt="Constra" style={{height:"100px", width:"180px"}}/>
                    {/* <span className="logo-text"><h1>Logo Mentahan</h1></span> */}
                  </a>
                </div>
                {/* logo end */}
                <div className="col-lg-9 header-right">
                  <ul className="top-info-box">
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Hubungi Kami</p>
                          <p className="info-box-subtitle">(+62) 823-2234-4343</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Email Kami</p>
                          <p className="info-box-subtitle">
                            bokingkami@gmail.com
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="last">
                      <div className="info-box last">
                        <div className="info-box-content">
                          <p className="info-box-title">Sertifikat Global</p>
                          <p className="info-box-subtitle">ISO 9001:2017</p>
                        </div>
                      </div>
                    </li>
                    <li className="header-get-a-quote">
                      <a className="btn btn-primary" href="contact.html">
                        Dapatkan Penawaran
                      </a>
                    </li>
                  </ul>
                  {/* Ul end */}
                </div>
                {/* header right end */}
              </div>
              {/* logo area end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    id="navbar-collapse"
                    className="collapse navbar-collapse"
                  >
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Home <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="active">
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Perusahaan <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="about.html">Tentang Kami</a>
                          </li>
                          <li>
                            <a href="team.html">Orang - Orang Kami</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="faq.html">Tanya Jawab</a>
                          </li>
                          <li>
                            <a href="pricing.html">Harga</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Proyek <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="projects.html"> Semua Proyek</a>
                          </li>
                          <li>
                            <a href="projects-single.html">Proyek Gabungan</a>
                          </li>
                          <li>
                            <a href="projects-single.html">Proyek Tuggal</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Jasa <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="services.html">Jasa Online</a>
                          </li>
                          <li>
                            <a href="service-single.html">Jasa Offline</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Berita <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Kontak
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*/ Col end */}
            </div>
            {/*/ Row end */}
            <div className="nav-search">
              <span id="search">
                <i className="fa fa-search" />
              </span>
            </div>
            {/* Search end */}
            <div className="search-block" style={{ display: "none" }}>
              <label htmlFor="search-field" className="w-100 mb-0">
                <input
                  type="text"
                  className="form-control"
                  id="search-field"
                  placeholder="Type what you want and enter"
                />
              </label>
              <span className="search-close">×</span>
            </div>
            {/* Site search end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Navigation end */}
      </header>
    </div>
  );
}
