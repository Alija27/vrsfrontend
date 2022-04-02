import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const VendorCreate = () => {
  const [vendorData, setVendorData] = useState({
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

  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
    console.log(vendorData);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };

  const submitVendorData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", vendorData.name);
    data.append("image", image);
    data.append("phone", vendorData.phone);
    data.append("email", vendorData.email);
    data.append("password", vendorData.password);
    data.append("address", vendorData.address);
    data.append("user_id", vendorData.user_id);

    await axios

      .post("http://localhost:8000/api/vendors", data)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/admin/vendors");
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

  const getUsers = async () => {
    await axios.get("http://localhost:8000/api/users").then((res) => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Add New vendor</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/vendors"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitVendorData} method="post">
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
                        value={vendorData.name}
                        onChange={handleInputChange}
                      />
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
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
                        value={vendorData.phone}
                        onChange={handleInputChange}
                      />
                      {validation.phone ? (
                        <div className="text-danger">{validation.phone}</div>
                      ) : (
                        ""
                      )}
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
                        value={vendorData.address}
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
                      <label htmlFor="user_id">
                        User
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="user_id"
                        onChange={handleInputChange}
                      >
                        <option value="">Select User</option>
                        {users.map((user) => (
                          <option value={user.id}>{user.name}</option>
                        ))}
                      </select>
                      {validation.user_id ? (
                        <div className="text-danger">{validation.user_id} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    {/*  <input
                        type="submit"
                        className="mt-2 btn btn-md bg-indigo"
                        id="btnSave"
                        value="Create"
                      /> */}

                    <div className="my-2 form-group">
                      <button
                        onClick={submitVendorData}
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

export default VendorCreate;
