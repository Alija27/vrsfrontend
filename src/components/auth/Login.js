import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          navigate("/admin");
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []); // eslint-disable-line

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [setUser] = useContext(UserContext);

  function login(e) {
    e.preventDefault();
    setError("");
    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid Email or Password");
      });
  }
  return (
    <div>
      {loading && <div>Loading...</div>}

      {!loading && (
        <div className="m-2 login-page">
          <div className="login-box">
            <div className="card card-outline card-indigo">
              <div className="card-header text-center">
                <Link to="/login" className="h1">
                  <b>Login</b>
                </Link>
              </div>
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}

                <form method="post" onSubmit={login}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </form>
                {/* /.social-auth-links */}
                <p className="mb-1">
                  <Link to="forgot-password.html">I forgot my password</Link>
                </p>
                <p className="mb-0">
                  <Link to="/register" className="text-center">
                    Don't have an account? Register
                  </Link>
                </p>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      )}
    </div>
  );
};
