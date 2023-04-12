import Link from "next/link";
import React from "react";

export default function DataBokingTable() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Tabel Booking</h4>
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
                <td>
                  bemper rusak
                </td>
                <td>1 Hari</td>
                <td>1</td>
                <td>
                  <label className="btn btn-danger">Hapus</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
