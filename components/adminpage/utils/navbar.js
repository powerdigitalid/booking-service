export default function Navbar({change, clicked, setClicked, responsive, setResponsive, end, setEnd}) {

  // const change = (e) => {
  //   e.preventDefault()
  //   if (document.body.classList.contains("sidebar-icon-only") && screen.width > 1024){
  //     document.body.classList.remove("sidebar-icon-only")
  //   } else if (!document.body.classList.contains("sidebar-icon-only") && screen.width > 1024) {
  //     document.body.classList.add("sidebar-icon-only")
  //   } else if (!document.body.classList.contains("sidebar-icon-only") && screen.width <= 1024) {
  //     document.body.classList.add("sidebar-icon-only")
  //     // document.body.classList.remove("sidebar-icon-only")
  //   } else if (document.body.classList.contains("sidebar-icon-only") && screen.width <= 1024) {
  //     document.body.classList.remove("sidebar-icon-only")
  //     // document.body.classList.add("sidebar-icon-only")
  //   }
  // }

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" href="index.html">
          <img src="images/logo.svg" className="mr-2" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className={`navbar-menu-wrapper d-flex align-items-center ${end}`}>
        <button type="button" onClick={() => change(clicked)} className="navbar-toggler navbar-toggler align-self-center">
                <span className="icon-menu" />
          </button>
      </div>
    </nav>
  );
}
