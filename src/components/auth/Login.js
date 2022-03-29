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
              <div className="text-center card-header">
                <Link to="/login" className="h1">
                  <b>Login</b>
                </Link>
              </div>
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <div class="flex justify-center w-full p-6 rounded-lg  bg-white ">
                  <div className="w-1/2 p-10 shadow-lg">
                    <form method="post" onSubmit={login}>
                      <div className="mb-6 form-group">
                        <input
                          type="email"
                          className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="name"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-6 form-group">
                        <input
                          type="password"
                          className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                      <Link to="forgot-password.html">
                        I forgot my password
                      </Link>
                    </p>
                    <p className="mb-0">
                      <Link to="/register" className="text-center">
                        Don't have an account? Register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
