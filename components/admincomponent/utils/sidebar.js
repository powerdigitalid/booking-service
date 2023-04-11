import Link from 'next/link'
export default function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
        </div>
        <div className="sidebar-brand-text mx-3">Pelayanan Service Mobil</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" href="/admin">
          {/* <i className="fas fa-fw fa-tachometer-alt" /> */}
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/admin/tambahbooking">
          {/* <i className="fas fa-solid fa-list-ol" /> */}
          <span>Tambah Boking</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/admin/history">
          {/* <i className="fas fa-fw fa-table" /> */}
          <span>History</span>
        </Link>
      </li>
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>

  )
}