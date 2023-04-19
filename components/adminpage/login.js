import { useRouter } from "next/router";
import React, { useState } from "react";
import { setCookie } from "../../libs/cookie.lib";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Login success" && data.user.token) {
          Swal.fire("Success", "Login success!", "success");
          setCookie("token", data.user.token, 1);
          setCookie("username", data.user.username, 1);
          router.push("/admin");
        } else {
          Swal.fire("Error", data.message, "error");
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        Swal.fire("Error", "Internal Server Error! => " + err, "error");
        setLoading(false);
      });
  };
  return (
    <div className="row w-100 mx-0">
      <div className="col-lg-4 mx-auto">
        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
          <div className="brand-logo">
            <img src="../../dist/img/logo.png" alt="logo" width={128} height={128}/>
          </div>
          <h4>Sign in to continue.</h4>
          <form className="pt-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <button
                onClick={handleLogin}
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
