import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="row w-100 mx-0">
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
          <div className="brand-logo">
            <img src="../../images/logo.svg" alt="logo" />
          </div>
          <h4>Sign in to continue.</h4>
          <form className="pt-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mt-3">
              <a
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                href="#"
              >
                SIGN IN
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
