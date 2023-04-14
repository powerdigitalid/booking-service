import Link from 'next/link'
import React from 'react'

export default function Formuser() {
    return (
        <div>
            {/* Table User */}
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                    <h4 className="card-title col-10">Tabel User</h4>
                    <Link href={'/admin/user/tambahuser'} className='btn btn-primary'>Tambah User</Link>
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
                                <tr>
                                    <td>Danang123</td>
                                    <td>123danang</td>
                                    <td>danang sudanang</td>
                                    <td>
                                        <button className="btn btn-success mr-2">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
