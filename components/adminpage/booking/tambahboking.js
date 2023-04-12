import Link from "next/link";
import React from "react";
import Card from "../../admincomponent/utils/card";

export default function TambahBokingForm() {
  return (
    <div className="col-md-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Horizontal Form</h4>
          <p className="card-description">Horizontal form layout</p>
          <form className="forms-sample">
            <div className="form-group row">
              <label
                htmlFor="exampleInputUsername2"
                className="col-sm-3 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername2"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="exampleInputEmail2"
                className="col-sm-3 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail2"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="exampleInputMobile"
                className="col-sm-3 col-form-label"
              >
                Mobile
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputMobile"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="exampleInputPassword2"
                className="col-sm-3 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="exampleInputConfirmPassword2"
                className="col-sm-3 col-form-label"
              >
                Re Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-check form-check-flat form-check-primary">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Remember me
                <i className="input-helper" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
