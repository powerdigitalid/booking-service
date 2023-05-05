import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function DataBokingHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const searched = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  const handleFetchData = () => {
    setLoading(true);
    fetch("/api/customer/all?status=", {
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
  const handleDelete = (id) => {
    fetch(`/api/customer/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          handleFetchData();
        } else {
          Swal.fire("Success", res.message, "success");
          handleFetchData();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };

  const handleDeleteAll = (id) => {
    fetch(`/api/customer/deleteall?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          handleFetchData();
        } else {
          Swal.fire("Success", res.message, "success");
          handleFetchData();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };
  useEffect(() => {
    handleFetchData();
  }, []);
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
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
          <div className="btn btn-danger col-2" onClick={()=>handleDeleteAll(id)} >
            <i className="icon-trash menu-icon" /> Semua
          </div>
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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="overflow-auto">
              {searched.length > 0 ? searched.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.information}</td>
                  <td>{item.duration}</td>
                  <td>{item.queue}</td>
                  <td><span className={`badge badge-pill badge-${item.status == 'unconfirmed' ? 'warning' : item.status == 'confirmed' ? 'success' : item.status == 'done' ? 'info' : 'secondary'}`}>{item.status}</span></td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(item.id)} >
                      <i className="icon-trash menu-icon" />
                    </button>
                  </td>
                </tr>
              )) : (<tr><td colSpan={6} className="text-warning text-center font-weight-bold">Data unavailable!</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
