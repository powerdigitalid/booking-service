import Link from "next/link";
import React from "react";

export default function TambahBokingForm() {
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Tambah Booking</h4>
          <form className="forms-sample">
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
