import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function DataBokingTable() {
  const [data, setData] = useState([]);
  
  const fetchBooking = async () => {
    fetch('/api/customer/all',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchBooking();
  }, []);


  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
        <h4 className="card-title col-6">Tabel Booking</h4>
        <div className="input-group col-6">
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
              {data.map((booking,i) => (
              <tr key={i}>
                <td>{booking.name}</td>
                <td>{booking.date}</td>
                <td>{booking.information}</td>
                <td>{booking.duration}</td>
                <td>{booking.queue}</td>
                <td>
                  <label className="btn btn-primary">Konfirmasi</label>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
