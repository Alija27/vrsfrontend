import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const VendorEdit = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [vendor, setVendor] = useState({});
  const [loading, setLoading] = useState();
  const [user_list, setUsers] = useState([]);

  const { id } = useParams();
  const fetchVendor = async () => {
    await useAxios.get(`/admin/vendors/${id}`).then((res) => {
      setVendor(res.data);
    });
    console.log(vendor);
  };
  const fetchUser = async () => {
    await axios(`http://localhost:8000/api/users`).then((res) => {
      setUsers(res.data);
    });
  };

  const handleInputChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
    console.log(vendor);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };

  useEffect(() => {
    fetchUser();
    fetchVendor(); /* eslint-disable */
  }, []);

  const updatevendor = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", vendor.name);
    data.append("image", image);
    data.append("phone", vendor.phone);

    // data.append("password", vendor.password);
    data.append("address", vendor.address);
    data.append("user_id", vendor.user_id);
    data.append("_method", "PUT");
    console.log(data.get("image"));

    await axios
      .post(`http://localhost:8000/api/vendors/${id}`, data)
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
  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Edit Vendor</h3>
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
                  <form onSubmit={updatevendor} method="post">
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
                        onChange={handleInputChange}
                        value={vendor.name}
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
                        value={vendor.phone}
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
                        value={vendor.address}
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
                      <img
                        alt=""
                        src={`http://localhost:8000/storage/${vendor.image}`}
                        width={150}
                        height={150}
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
                        value={vendor.user_id}
                        name="user_id"
                        onChange={handleInputChange}
                      >
                        <option value="">Select User</option>
                        {user_list &&
                          user_list.map((user) => (
                            <option value={user.id}>{user.name}</option>
                          ))}
                      </select>
                      {validation.user_id && (
                        <div className="text-danger">{validation.user_id} </div>
                      )}
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={updatevendor}
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
                            <span>Updating...</span>
                          </>
                        ) : (
                          "Update"
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

export default VendorEdit;
