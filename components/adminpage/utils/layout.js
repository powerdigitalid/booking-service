import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
