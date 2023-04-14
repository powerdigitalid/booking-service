import Link from 'next/link'
import React from 'react'

export default function EditUser() {
  return (
    <div>
        {/* Form input User */} 
        <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">EDIT USER</h4>
                        <form className="forms-sample">
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
                                    />
                                </div>
                            </div>
                            <Link href={'/admin/user'} type="submit" className="btn btn-success mr-2">
                            <i className="ti-pencil" /> EDIT
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
