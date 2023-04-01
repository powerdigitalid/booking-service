import Link from 'next/link'
import React from 'react'
import Card from '../utils/card'

export default function TambahBokingForm() {
  return (
    <Card cardTitle="Admin" cardIcon="fa-user">
      <div className="container-fluid">
        <form >
          <div className="form-group">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName1">Nama</label>
                  <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName2">Jenis Mobil</label>
                  <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName1">Nomor Boking</label>
                  <select id="dudi" className="form-control form-control-sm">
                    <option value="">Pilih...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <label htmlFor="tgl">Tanggal Boking</label>
                  <input type="date" className="form-control form-control-sm text-left" id="tgl" />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="telp">Nomer Telepon</label>
                  <input type="tel" className="form-control form-control-sm" name="telp" id="telp" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Link href='/admin/tambahboking'>
            <button className="btn btn-primary" type="submit">Simpan</button>
            </Link>
          </div>
        </form>
      </div>
    </Card>
  )
}
