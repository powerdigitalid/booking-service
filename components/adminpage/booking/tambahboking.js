import React, { useState } from "react";

export default function TambahBokingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [lama, setLama] = useState("");
  const [antrian, setAntrian] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !keterangan || !lama || !antrian) {
      alert("Please fill all the fields");
    } else {
      const data = {
        name: name,
        information: keterangan,
        duration: lama,
        queue: antrian,
      }
      fetch("/api/customer/create", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            alert("Data berhasil ditambahkan");
            handleClearState();
          } else {
            alert("Data gagal ditambahkan");
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
                  onChange={(e) => setLama(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="antrian" className="col-sm-3 col-form-label">
                Antrian Ke
              </label>
              <div className="col-sm-9">
                <select
                  className="form-control form-control-sm"
                  id="antrian"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
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
