import React from 'react'

export default function DataBokingHistory() {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row flex-lg-nowrap">
                        <div className="col">
                            <div className="row flex-lg-nowrap">
                                <div className="col mb-3">
                                    <div className="e-panel card">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h6 className="mr-2"><span>Admin</span></h6>
                                            </div>
                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered text-center">
                                                        <thead>
                                                            <tr className=''>
                                                                <th className="max-width">No.</th>
                                                                <th className="sortable">Nama</th>
                                                                <th className="sortable">Jenis Mobil</th>
                                                                <th className="sortable">Tanggal</th>
                                                                <th className="sortable">Telp.</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-nowrap align-middle">1</td>
                                                                <td className="text-nowrap align-middle">Adam</td>
                                                                <td className="text-nowrap align-middle">BMW</td>
                                                                <td className="text-nowrap align-middle">12-11-2021</td>
                                                                <td className="text-nowrap align-middle">0812211212</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
