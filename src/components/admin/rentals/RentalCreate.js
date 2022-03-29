import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const RentalCreate = () => {
  const [rentalData, setRentalData] = useState({
    user_id: "",
    vehicle_id: "",
    start_date: "",
    end_date: "",
    destination: "",
    is_approved: "",
    is_complete: "",
    total_amount: "",

    remarks: "",
  });

  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setRentalData({ ...rentalData, [e.target.name]: e.target.value });
    console.log(rentalData);
  };

  const submitRentalData = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const data = new FormData();
    // data.append("name", rentalData.user_id);
    // data.append("phone", rentalData.vehicle_id);
    // data.append("email", rentalData.start_date);
    // data.append("password", rentalData.end_date);
    // data.append("address", rentalData.destination);
    // data.append("role", rentalData.is_approved);

    await axios

      .post("http://localhost:8000/api/rentals", rentalData)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/admin/rentals");
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
  const getVehicles = async () => {
    await axios.get("http://localhost:8000/api/vehicles").then((res) => {
      setVehicles(res.data);
    });
  };
  useEffect(() => {
    getUsers();
    getVehicles();
  }, []);

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Add New Rental</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/rentals"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitRentalData} method="post">
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
                        {users.map((user, index) => (
                          <option value={user.id}>{user.name}</option>
                        ))}
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="vehicle_id">
                        Vehicle
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="vehicle_id"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Vehicle</option>
                        {vehicles.map((vehicle, index) => (
                          <option value={vehicle.id}>{vehicle.name}</option>
                        ))}
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Start Date
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="datetime-local"
                        name="start_date"
                        id="start_date"
                        className="form-control "
                        value={rentalData.start_date}
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
                        End Date
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="datetime-local"
                        name="end_date"
                        id="end_date"
                        className="form-control "
                        value={rentalData.end_date}
                        onChange={handleInputChange}
                      />
                      {validation.phone ? (
                        <div className="text-danger">{validation.phone}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="destination">
                        Destination
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="destination"
                        id="destination"
                        className="form-control "
                        value={rentalData.destination}
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
                      <label htmlFor="is_approved">
                        Is Approved
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="is_approved"
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="is_complete">
                        Is Complete
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="is_complete"
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="total_amount">
                        Total Amount
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="number"
                        name="total_amount"
                        id="total_amount"
                        className="form-control "
                        value={rentalData.confirmpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/*  <div className="form-group">
                      <label htmlFor="citizenship_number">
                        Citizenship Number
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="number"
                        name="citizenship_number"
                        id="citizenship_number"
                        className="form-control "
                        value={rentalData.citizenship_number}
                        onChange={handleInputChange}
                      />
                      {validation.address ? (
                        <div className="text-danger">{validation.address} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="citizenship_image">
                        Citizenship Image
                      </label>
                      <span className="text-danger" title="required">
                        *
                      </span>
                      <input
                        type="file"
                        name="citizenship_image"
                        id="citizenship_image"
                        className="form-control "
                        onChange={(e) => handleImage(e.target.files)}
                      />
                    </div> */}

                    {/*  <input
                        type="submit"
                        className="mt-2 btn btn-md bg-indigo"
                        id="btnSave"
                        value="Create"
                      /> */}
                    <div className="form-group">
                      <label htmlFor="remarks">
                        Remarks
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="remarks"
                        id="remarks"
                        className="form-control "
                        value={rentalData.confirmpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={submitRentalData}
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
