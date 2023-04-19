import Link from "next/link";
<<<<<<< HEAD
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


=======
import React, { useEffect, useState } from "react";

export default function DataBokingTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleFetchData = () => {
    setLoading(true);
    fetch("/api/customer/all?status=unconfirmed", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    handleFetchData();
  }, []);
>>>>>>> c8ff141b59e1ffd9676d6ba5624675df106a675f
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

<<<<<<< HEAD
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
=======
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
                {data.length > 0 ? data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.information}</td>
                    <td>{item.duration}</td>
                    <td>{item.queue}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Konfirmasi</button>
                    </td>
                  </tr>
                )) : (<tr><td colSpan={6} className="text-warning font-weight-bold text-center">Data unavailable!</td></tr>)}
              </tbody>
            </table>
          </div>
>>>>>>> c8ff141b59e1ffd9676d6ba5624675df106a675f
        </div>
      </div>
    </div>
  );
}
