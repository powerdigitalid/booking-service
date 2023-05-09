import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Layout({ children }) {


  const [clicked, setClicked] = useState(true)
  const [responsive, setResponsive] = useState("")
  const [end, setEnd] = useState("")
  console.log(clicked);

  const change = (clicked) => {
    setClicked(!clicked)
    if (clicked === true && screen.width > 1024){
      document.body.classList.remove("sidebar-icon-only")
    } else if (clicked === false && screen.width > 1024) {
      document.body.classList.add("sidebar-icon-only")
    } else if (clicked === true && screen.width <= 1024) {
      setResponsive("")
      // document.body.classList.remove("sidebar-icon-only")
    } else if (clicked === false && screen.width <= 1024) {
      setResponsive("active")
      // document.body.classList.add("sidebar-icon-only")
    }
  }

  return (
    <div className="container-scroller">
      <Navbar clicked={clicked} setClicked={setClicked} responsive={responsive} setResponsive={setResponsive} change={change} />
      <div className="container-fluid page-body-wrapper">
        <Sidebar clicked={clicked} setClicked={setClicked} responsive={responsive} setResponsive={setResponsive} />
        <div className="main-panel">
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}
