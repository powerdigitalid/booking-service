import Link from 'next/link'
import React from 'react'

export default function Inputuser() {
  return (
    <div>
        {/* Form input User */} 
        <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Tambah User</h4>
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
                            <Link href={'/admin/user'} type="submit" className="btn btn-primary mr-2">
                                Tambahkan
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
