import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Vendor = () => {
  const [vendor, setVendor] = useState({});
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const fetchVendor = async () => {
    await axios(`http://localhost:8000/api/vendors/${id}`).then((res) => {
      setVendor(res.data);
    });
    console.log(vendor);
  };
  const fetchUser = async () => {
    await axios(`http://localhost:8000/api/users/${id}`).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    fetchUser();
    fetchVendor(); /* eslint-disable */
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
                  <div className="card-title">Vendor Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/vendors/edit/${vendor.id}`}
                      className="btn btn-link bg-cyan btn-sm mr-1"
                    >
                      <i class="fas fa- mr-1"></i>
                      Edit
                    </Link>
                    <Link
                      to="/admin/vendors"
                      className="btn btn-link bg-indigo btn-sm ml-1"
                    >
                      <i class="fas fa-arrow-left mr-1"></i>
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
                      <td>{vendor.name}</td>
                    </tr>
                    <tr>
                      <th>Image</th>
                      <td>
                        {vendor.image ? (
                          <img
                            src={`http://localhost:8000/storage/${vendor.image}`}
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
                      <th>Phone</th>
                      <td>{vendor.phone}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{vendor.address}</td>
                    </tr>
                    <tr>
                      <th>Created At</th>
                      <td>{vendor.created_at}</td>
                    </tr>
                    <tr>
                      <th>Updated At</th>
                      <td>{vendor.updated_at}</td>
                    </tr>
                    <tr>
                      <th>User</th>
                      <td>{vendor.user_id}</td>
                    </tr>
                    {user.vendor && (
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
                              <th>User ID</th>
                              <th>Image</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {/* <td>{user.vendor.id}</td> */}
                                <td>{user.vendor.name}</td>
                                {/*  <td>{user.vendor.address}</td>
                                <td>{user.vendor.phone}</td>
                                <td>{user.vendor.user_id}</td>
                                <td>{user.vendor.image}</td> */}
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

export default Vendor;
