import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function InputUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      namauser: username, pass: password, nama: name
    };
    fetch('/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data){
          Swal.fire("Success", data.message, "success");
          handleClearState();
          router.push('/admin/user');
        } else {
          Swal.fire("Error", data.message, "error");
        }
      })
      .catch((err) => {
        Swal.fire("Error", "Internal Server Error! => " + err, "error");
        console.error(err);
      });
  };
  const handleClearState = () => {
    setUsername('');
    setPassword('');
    setName('');
  };
  return (
    <div>
      {/* Form input User */}
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">TAMBAH USER</h4>
            <form className="forms-sample" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="exampleInputUsername2"
                  className="col-sm-3 col-form-label"
                >
                  Username
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="exampleInputUsername2"
                  className="col-sm-3 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Nama" className="col-sm-3 col-form-label">
                  Nama Lengkap
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="Nama"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
    </div>
  )
}
