import Link from "next/link";
import React, {useState,useEffect} from "react";
import {useRouter} from "next/router";

export default function TambahBokingForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [information, setInformation] = useState("");
  const [duration, setDuration] = useState("");
  const [queue, setQueue] = useState("");

  const handleBoking =()=>{
    const data = {
      name,
      tanggal,
      information,
      duration,
      queue
    };
    fetch('/api/customer/create',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    ).then((res) => res.json())
    .then((data) => {
      if(data.status === 200){
        alert('Berhasil menambahkan data');
        router.push('/admin/adminpage/booking');
        handleClearForm();
      }else{
        alert('Gagal menambahkan data');
        console.log(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const handleClearForm = ()=>{
    setName("");
    setTanggal("");
    setInformation("");
    setDuration("");
    setQueue("");
  }
  useEffect(() => {
    handleBoking();
  }, []);
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
                  onChange={(e)=>setName(e.target.value)}
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
                  onChange={(e)=>setTanggal(e.target.value)}
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
                  onChange={(e)=>setInformation(e.target.value)}
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
                  onChange={(e)=>setDuration(e.target.value)}
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
                  onChange={(e)=>setQueue(e.target.value)}
                >
                  <option value={''}>Pilih Nomor Antrian</option>
                  <option value={'1'}>1</option>
                  <option value={'2'}>2</option>
                  <option value={'3'}>3</option>
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
