import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export const VehicleShow = () => {
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams();
  const fetchVehicle = async () => {
    await axios(`http://localhost:8000/api/vehicles/${id}`).then((res) => {
      setVehicle(res.data);
    });
  };
  useEffect(() => {
    fetchVehicle(); /* eslint-disable */
  }, []);
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}

        {/* <div className="card card-primary card-outline"> */}

        <div className="container-fluid">
          <div className="row mt-1">
            <div className="col-12">
              <div className="card card-indigo card-outline m-2 mt-5">
                <div className="card-header">
                  <div className="card-title">vehicle Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/vehicles/edit/${vehicle.id}`}
                      className="btn btn-link bg-cyan btn-sm mr-1"
                    >
                      <i className="fas fa- mr-1"></i>
                      Edit
                    </Link>
                    <Link
                      to="/admin/vehicles"
                      className="btn btn-link bg-indigo btn-sm ml-1"
                    >
                      <i className="fas fa-arrow-left mr-1"></i>
                      Go back
                    </Link>
                  </div>
                </div>
                <div className="card-body p-0">
                  <table className="table table-bordered">
                    <tr>
                      <th>ID</th>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{vehicle.name}</td>
                    </tr>
                    <tr>
                      <th>Image</th>
                      <td>
                        {vehicle.image ? (
                          <img
                            src={`http://localhost:8000/storage/${vehicle.image}`}
                            height={200}
                            width={200}
                            alt=""
                          />
                        ) : (
                          "No image to preview"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>Vendor Name</th>
                      <td>{vehicle.vendor_id}</td>
                    </tr>
                    <tr>
                      <th>Vehicle Type</th>
                      <td>{vehicle.type_id}</td>
                    </tr>
                    <tr>
                      <th>Model</th>
                      <td>{vehicle.model}</td>
                    </tr>
                    <tr>
                      <th>Color</th>
                      <td>{vehicle.color}</td>
                    </tr>
                    <tr>
                      <th>Total Seats</th>
                      <td>{vehicle.total_seats}</td>
                    </tr>
                    <tr>
                      <th>Rental Price</th>
                      <td>{vehicle.rental_price}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{vehicle.description}</td>
                    </tr>
                    <tr>
                      <th>Terms</th>
                      <td>{vehicle.terms}</td>
                    </tr>
                    <tr>
                      <th>Condition</th>
                      <td>{vehicle.condition}</td>
                    </tr>
                    <tr>
                      <th>Is Availble</th>
                      <td>{vehicle.is_available === 1 ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th>Has Driver</th>
                      <td>{vehicle.condition === 1 ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th>Is Approved</th>
                      <td>{vehicle.is_approved === 1 ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th>Created At</th>
                      <td>{vehicle.created_at}</td>
                    </tr>
                    <tr>
                      <th>Updated At</th>
                      <td>{vehicle.updated_at}</td>
                    </tr>
                    {vehicle.vendor && (
                      <tr>
                        <th>Vendor</th>

                        <td className="p-0">
                          <table className="table table-bordered table-hover p-0">
                            <thead className="bg-indigo">
                              <tr>
                                {/*  <th>Id</th> */}
                                <th>Name</th>
                                {/* <th>Address</th>
                              <th>Phone</th>
                              <th>vehicle ID</th>
                              <th>Image</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {/* <td>{vehicle.vendor.id}</td> */}
                                <td>{vehicle.vendor.name}</td>
                                {/*  <td>{vehicle.vendor.address}</td>
                                <td>{vehicle.vendor.phone}</td>
                                <td>{vehicle.vendor.vehicle_id}</td>
                                <td>{vehicle.vendor.image}</td> */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
