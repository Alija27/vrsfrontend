import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const Vendor = () => {
  const [vendor, setVendor] = useState({
    user: {},
  });
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const fetchVendor = async () => {
    await useAxios.get(`/admin/vendors/${id}`).then((res) => {
      setVendor(res.data);
    });
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
          <div className="mt-1 row">
            <div className="col-12">
              <div className="m-2 mt-5 card card-indigo card-outline">
                <div className="card-header">
                  <div className="card-title">Vendor Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/vendors/edit/${vendor.id}`}
                      className="mr-1 btn btn-link bg-cyan btn-sm"
                    >
                      <i class="fas fa- mr-1"></i>
                      Edit
                    </Link>
                    <Link
                      to="/admin/vendors"
                      className="ml-1 btn btn-link bg-indigo btn-sm"
                    >
                      <i class="fas fa-arrow-left mr-1"></i>
                      Go back
                    </Link>
                  </div>
                </div>
                <div className="p-0 card-body">
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
                      <td>{vendor.user.name}</td>
                    </tr>
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
