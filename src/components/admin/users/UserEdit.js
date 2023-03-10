import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const UserEdit = () => {
  const [image, setImage] = useState("");
  const [citizenshipimage, setCitizenshipimage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();

  //   const [userData, setuserData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     password: "",
  //     role: "",
  //   });
  const { id } = useParams();
  const fetchUser = async () => {
    await useAxios.get(`/admin/users/${id}`).then((res) => {
      setUser(res.data);
    });
    console.log(user);
  };
  useEffect(() => {
    fetchUser(); /* eslint-disable */
  }, []);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const handleCitizenshipImage = (files) => {
    setCitizenshipimage(files[0]);
  };
  const updateuser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", user.name);
    if (image) {
      data.append("image", image);
    }
    data.append("phone", user.phone);
    data.append("email", user.email);
    // data.append("password", user.password);
    data.append("address", user.address);
    data.append("role", user.role);
    data.append("citizenship_number", user.citizenship_number);
    data.append("citizenship_image", citizenshipimage);
    data.append("_method", "PUT");
    console.log(data.get("name"));

    await useAxios
      .post(`/admin/users/${id}`, data)
      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });
        navigate("/admin/users");
      })
      .catch((err) => {
        if (err.response.status == 422) {
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
                  <h3 className="card-title">Edit User</h3>
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
                  <form onSubmit={updateuser} method="post">
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
                        value={user.name}
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
                        value={user.email}
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
                        value={user.phone}
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
                        value={user.address}
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
                        src={`http://localhost:8000/storage/${user.image}`}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="citizenship_number">
                        Citizenship Number
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="citizenship_number"
                        id="citizenship_number"
                        className="form-control "
                        value={user.citizenship_number}
                        onChange={handleInputChange}
                      />
                      {validation.citizenship_number ? (
                        <div className="text-danger">
                          {validation.citizenship_number}{" "}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="image"> Citizenship Image</label>
                      <input
                        type="file"
                        name="citizenship_image"
                        id="citizenship_image"
                        className="form-control "
                        onChange={(e) => handleCitizenshipImage(e.target.files)}
                      />
                      <img
                        src={`http://localhost:8000/storage/${user.citizenship_image}`}
                        width={150}
                        height={150}
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
                        value={user.role}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Vendor">Vendor</option>
                        <option value="Customer">Customer</option>
                      </select>

                      {/* <input
                        type="submit"
                        className="mt-2 btn btn-md bg-indigo"
                        id="btnSave"
                        value="Create"
                      /> */}
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={updateuser}
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

export default UserEdit;
