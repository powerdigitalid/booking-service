import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function TambahBokingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [lama, setLama] = useState(0);
  const [antrian, setAntrian] = useState(0);
  const handleAvailableQueue = () => {
    fetch("/api/customer/available-queue", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Success") {
          setAntrian(res.data.queue + 1);
        } else {
          setAntrian(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !keterangan || !lama || !antrian) {
      alert("Please fill all the fields");
    } else {
      const data = {
        name: name,
        date: date,
        information: keterangan,
        duration: parseInt(lama),
        queue: antrian,
      }
      fetch("/api/customer/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            Swal.fire("Success", "Data berhasil ditambahkan", "success");
            handleClearState();
            handleAvailableQueue();
          } else {
            Swal.fire("Error", res.message, "error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const handleClearState = () => {
    setName("");
    setDate("");
    setKeterangan("");
    setLama("");
    setAntrian("");
  }
  useEffect(() => {
    handleAvailableQueue();
  }, []);
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Tambah Booking</h4>
          <form onSubmit={handleSubmit} className="forms-sample">
            <div className="form-group row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Nama
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="tanggal" className="col-sm-3 col-form-label">
                Tanggal
              </label>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  id="tanggal"
                  placeholder="Tanggal"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="keterangan" className="col-sm-3 col-form-label">
                Keterangan
              </label>
              <div className="col-sm-9">
                <input
                  type="textarea"
                  className="form-control"
                  id="keterangan"
                  placeholder="Mobile number"
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lama" className="col-sm-3 col-form-label">
                Lama Pengerjaan
              </label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  id="lama"
                  placeholder="Lama Pengerjaan"
                  value={lama}
                  onChange={(e) => setLama(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="antrian" className="col-sm-3 col-form-label">
                Antrian Ke
              </label>
              <div className="col-sm-9">
                {/* <select
                  className="form-control form-control-sm"
                  id="antrian"
                  onChange={(e)=>setQueue(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select> */}
                <input
                  type="number"
                  className="form-control"
                  id="antrian"
                  placeholder="Antrian"
                  value={antrian}
                  onChange={(e) => setAntrian(parseInt(e.target.value))}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Tambahkan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
