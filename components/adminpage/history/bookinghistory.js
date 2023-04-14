import React from "react";
import Link from "next/link";

export default function DataBokingHistory() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h4 className="card-title col-5">Tabel History</h4>
          <div className="input-group col-5">
          <div
            className="input-group-prepend hover-cursor"
            id="navbar-search-icon"
          >
            <span className="input-group-text" id="search">
              <i className="icon-search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="navbar-search-input"
            placeholder="CARI"
            aria-label="search"
            aria-describedby="search"
          />
        </div>
          <Link href={"/admin/booking"} className="btn btn-danger col-2">
            <i className="icon-trash menu-icon" /> Semua
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Tanggal</th>
                <th>Keterangan</th>
                <th>Lama Pengerjaan</th>
                <th>Antrian Ke</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              <tr>
                <td>Jacob</td>
                <td>22/04/2023</td>
                <td>bemper rusak</td>
                <td>1 Hari</td>
                <td>1</td>
                <td>
                  <label className="btn btn-danger">
                    <i className="icon-trash menu-icon" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
