import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export const VehicleEdit = () => {
  const [vehicleData, setvehicleData] = useState({
    /*  name: "",
    vendor_id: "",
    type_id: "",
    model: "",
    color: "",
    total_seats: "",
    rental_price: "",
    description: "",
    terms: "",

    condition: "",
    is_available: "",
    has_driver: "",
    is_approved: "", */
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [vendors, setVendors] = useState([]);
  const { id } = useParams();
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setvehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    console.log(vehicleData);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const getVehicles = async () => {
    await axios.get(`admin/vehicles/${id}`).then((res) => {
      setvehicleData(res.data);
    });
  };
  const getVendors = async () => {
    await axios.get("admin/vendors").then((res) => {
      setVendors(res.data);
    });
  };
  const getTypes = async () => {
    await axios.get("admin/types").then((res) => {
      setTypes(res.data);
    });
  };
  useEffect(() => {
    getVehicles();
    getVendors();
    getTypes();
  }, []);
  const submitvehicleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", vehicleData.name);
    data.append("vendor_id", vehicleData.vendor_id);
    data.append("type_id", vehicleData.type_id);
    data.append("model", vehicleData.model);
    data.append("color", vehicleData.color);
    data.append("total_seats", vehicleData.total_seats);
    data.append("rental_price", vehicleData.rental_price);
    data.append("description", vehicleData.description);
    data.append("terms", vehicleData.terms);

    data.append("image", image);

    data.append("condition", vehicleData.condition);
    data.append("is_available", vehicleData.is_available);
    data.append("has_driver", vehicleData.has_driver);
    data.append("is_approved", vehicleData.is_approved);
    data.append("_method", "PUT");
    await axios

      .post(`admin/vehicles/${id}`, data)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/admin/vehicles");
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
                  <h3 className="card-title">Add New vehicle</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/vehicles"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitvehicleData} method="post">
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
                        value={vehicleData.name}
                        onChange={handleInputChange}
                      />
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="vendor_id">
                        Vendor
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="vendor_id"
                        value={vehicleData.vendor_id}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Vendor</option>
                        {vendors.map((vendor, index) => (
                          <option value={vendor.id}>{vendor.name}</option>
                        ))}
                      </select>
                      {validation.vendor_id ? (
                        <div className="text-danger">
                          {validation.vendor_id}{" "}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="type_id">
                        Vehicle Type
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        name="type_id"
                        value={vehicleData.type_id}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Vehicle type</option>
                        {types.map((type, index) => (
                          <option value={type.id}>{type.name}</option>
                        ))}
                      </select>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="model">
                        Model
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        className="form-control "
                        value={vehicleData.model}
                        onChange={handleInputChange}
                      />
                      {validation.model ? (
                        <div className="text-danger">{validation.model}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="color">
                        Color
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="color"
                        id="color"
                        className="form-control "
                        value={vehicleData.color}
                        onChange={handleInputChange}
                      />
                      {validation.phone ? (
                        <div className="text-danger">{validation.phone}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="total_seats">
                        Total_Seats
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="total_seats"
                        id="total_seats"
                        className="form-control "
                        value={vehicleData.total_seats}
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
                        Rental Price
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="rental_price"
                        id="rental_price"
                        className="form-control "
                        value={vehicleData.rental_price}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">
                        Description
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        className="form-control "
                        value={vehicleData.description}
                        onChange={handleInputChange}
                      />
                      {validation.address ? (
                        <div className="text-danger">{validation.address} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">
                        Terms
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="terms"
                        id="terms"
                        className="form-control "
                        value={vehicleData.terms}
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
                        src={`http://localhost:8000/storage/${vehicleData.image}`}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="condition">
                        Condition
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="condition"
                        id="condition"
                        className="form-control "
                        value={vehicleData.condition}
                        onChange={handleInputChange}
                      />
                      {validation.address ? (
                        <div className="text-danger">{validation.address} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="is_available">
                        Is Available
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        value={vehicleData.is_available}
                        name="is_available"
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
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
                    <div className="form-group">
                      <label htmlFor="has_driver">
                        Has Driver
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        value={vehicleData.has_driver}
                        name="has_driver"
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
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
                    <div className="form-group">
                      <label htmlFor="is_approved">
                        Is Approved
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <select
                        className="form-control"
                        value={vehicleData.is_approved}
                        name="is_approved"
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
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
                        onClick={submitvehicleData}
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
                            <span>Updating..</span>
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
