import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function TableUser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleFetchData = () => {
    setLoading(true);
    fetch("/api/user/all", {
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

  const handleDeleteData = (id) => {
    fetch(`/api/user/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          handleFetchData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id, e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteData(id);
      }
    })
  };

  return (
    <div>
      {/* Table User */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4 className="card-title col-10">Tabel User</h4>
            <Link href={"/admin/user/tambahuser"} className="btn btn-primary">
              Tambah User
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Nama Lengkap</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="overflow-auto">
              {data.length > 0 ? data.map((users, index) => (
                <tr key={index}>
                  <td>{users.username}</td>
                  <td>{users.password}</td>
                  <td>{users.name}</td>
                  <td>
                    <Link href={`/admin/user/edituser?id=${users.id}`}>
                      <button className="btn btn-success mr-2">
                        <i className="ti-pencil" />
                      </button>
                    </Link>
                    <button className="btn btn-danger" onClick={(e)=> handleDelete(users.id, e)} >
                      <i className="ti-trash" />
                    </button>
                  </td>
                </tr>
                )) : (<tr><td colSpan={6} className="text-warning font-weight-bold text-center">Data unavailable!</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
