import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UserCreate = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", userData.name);
    data.append("image", image);
    data.append("phone", userData.phone);
    data.append("email", userData.email);
    data.append("password", userData.password);
    data.append("address", userData.address);
    data.append("role", userData.role);

    await axios

      .post("http://localhost:8000/api/users", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/admin/users");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setValidationError(err.response.data.errors);
        } else {
          Swal.fire({
            timer: 2000,
            icon: "error",
            title: err,
          });
        }
      });
    setLoading(false);
  };

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Add New User</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/users"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitUserData} method="post">
                    <div className="form-group">
                      <label htmlFor="name">
                        Name
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control "
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control "
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                      {validation.email ? (
                        <div className="text-danger">{validation.email}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control "
                        value={userData.phone}
                        onChange={handleInputChange}
                      />
                      {validation.phone ? (
                        <div className="text-danger">{validation.phone}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        Password
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control "
                        value={userData.password}
                        onChange={handleInputChange}
                      />
                      {validation.password ? (
                        <div className="text-danger">
                          {validation.password}{" "}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmpassword">
                        Confirm Password
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        className="form-control "
                        value={userData.confirmpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">
                        Address
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control "
                        value={userData.address}
                        onChange={handleInputChange}
                      />
                      {validation.address ? (
                        <div className="text-danger">{validation.address} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control "
                        onChange={(e) => handleImage(e.target.files)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">
                        Role
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="role"
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Vendor">Vendor</option>
                        <option value="Customer">Customer</option>
                      </select>
                      {validation.role ? (
                        <div className="text-danger">{validation.role}</div>
                      ) : (
                        ""
                      )}
                      {/*  <input
                        type="submit"
                        className="mt-2 btn btn-md bg-indigo"
                        id="btnSave"
                        value="Create"
                      /> */}
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={submitUserData}
                        type="submit"
                        id="btnSave"
                        className="btn bg-indigo"
                      >
                        {loading ? (
                          <>
                            <span
                              className="mr-2 spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Saving...</span>
                          </>
                        ) : (
                          "Create"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
