import Link from "next/link";
export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" href="/admin">
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/booking/tambahbookingform">
            <i className="icon-columns menu-icon" />
            <span className="menu-title">Input Booking</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/booking">
            <i className="icon-menu menu-icon" />
            <span className="menu-title">Data Booking</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/admin/history">
            <i className="icon-clock menu-icon" />
            <span className="menu-title">History</span>
          </Link>
        </li>
        <li className="nav-item">
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
