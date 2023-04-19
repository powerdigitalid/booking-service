import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");
  const handleCheckActiveMenu = () => {
    let pathname = router.pathname;
    const path = pathname.split("/").length > 3 ? pathname.split("/")[3] : pathname.split("/").length > 2 ? pathname.split("/")[2] : pathname.split("/")[1];
    switch (path) {
      case "admin":
        setActiveMenu("dashboard");
        break;
      case "tambahbookingform":
        setActiveMenu("tambahbookingform");
        break;
      case "booking":
        setActiveMenu("booking");
        break;
      case "history":
        setActiveMenu("history");
        break;
      case "user":
        setActiveMenu("user");
        break;
      default:
        setActiveMenu("");
        break;
    }
  };
  useEffect(() => {handleCheckActiveMenu();}, []);
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className={`nav-item${activeMenu == 'dashboard' ? ' active' : ''}`}>
          <Link className="nav-link" href="/admin">
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className={`nav-item${activeMenu == 'tambahbookingform' ? ' active' : ''}`}>
          <Link className="nav-link" href="/admin/booking/tambahbookingform">
            <i className="icon-columns menu-icon" />
            <span className="menu-title">Input Booking</span>
          </Link>
        </li>
        <li className={`nav-item${activeMenu == 'booking' ? ' active' : ''}`}>
          <Link className="nav-link" href="/admin/booking">
            <i className="icon-menu menu-icon" />
            <span className="menu-title">Data Booking</span>
          </Link>
        </li>
        <li className={`nav-item${activeMenu == 'history' ? ' active' : ''}`}>
          <Link className="nav-link" href="/admin/history">
            <i className="icon-clock menu-icon" />
            <span className="menu-title">History</span>
          </Link>
        </li>
        <li className={`nav-item${activeMenu == 'user' ? ' active' : ''}`}>
          <Link className="nav-link" href="/admin/user">
            <i className="icon-head menu-icon" />
            <span className="menu-title">User</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">
            <i className="icon-square-cross menu-icon" />
            <span className="menu-title">Close</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
