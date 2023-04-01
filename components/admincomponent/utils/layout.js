import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({children}) {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}