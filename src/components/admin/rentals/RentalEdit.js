import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const RentalEdit = () => {
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [rental, setRental] = useState([]);
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const fetchRental = async () => {
    await axios(`http://localhost:8000/api/rentals/${id}`).then((res) => {
      setRental(res.data);
    });
    console.log(rental);
  };
  useEffect(() => {
    fetchRental(); /* eslint-disable */
  }, []);

  const handleInputChange = (e) => {
    setRental({ ...rental, [e.target.name]: e.target.value });
    console.log(user);
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
  const updaterental = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .put(`http://localhost:8000/api/rentals/${id}`, rental)
      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
        });
        navigate("/admin/rentals");
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
              <div className="card m-2">
                <div className="card-header">
                  <h3 className="card-title">Edit Rental</h3>
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
                  <form onSubmit={updaterental} method="post">
                    <div className="form-group">
                      <label htmlFor="user_id">
                        User
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        value={rental.user_id}
                        name="user_id"
                        onChange={handleInputChange}
                      >
                        <option value="">Select User</option>
                        {users.map((user, index) => (
                          <option key={index} value={user.id}>
                            {user.name}
                          </option>
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
                        value={rental.vehicle_id}
                        name="vehicle_id"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Vehicle</option>
                        {vehicles.map((vehicle, index) => (
                          <option key={index} value={vehicle.id}>
                            {vehicle.name}
                          </option>
                        ))}
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="start_date">
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
                        value={rental.start_date}
                        onChange={handleInputChange}
                      />
                      {validation.phone ? (
                        <div className="text-danger">{validation.phone}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="end_date">
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
                        value={rental.end_date}
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
                        value={rental.destination}
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
                        value={rental.is_approved}
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
                        value={rental.is_complete}
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
                        value={rental.total_amount}
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
                        value={rental.citizenship_number}
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
                        className="btn btn-md bg-indigo mt-2"
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
                        value={rental.remarks}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group my-2">
                      <button
                        type="submit"
                        id="btnSave"
                        className="btn bg-indigo"
                        onClick={updaterental}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm mr-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Updating.....</span>
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

export default RentalEdit;
