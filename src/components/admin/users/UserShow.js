import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export const UserShow = () => {
  const [user, setUser] = useState({});
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
                  <div className="card-title">User Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/users/edit/${user.id}`}
                      className="mr-1 btn btn-link bg-cyan btn-sm"
                    >
                      <i className="mr-1 fas fa-"></i>
                      Edit
                    </Link>
                    <Link
                      to="/admin/users"
                      className="ml-1 btn btn-link bg-indigo btn-sm"
                    >
                      <i className="mr-1 fas fa-arrow-left"></i>
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
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Image</th>
                      <td>
                        {user.image ? (
                          <img
                            src={`http://localhost:8000/storage/${user.image}`}
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
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{user.address}</td>
                    </tr>
                    <tr>
                      <th>Created At</th>
                      <td>{user.created_at}</td>
                    </tr>
                    <tr>
                      <th>Updated At</th>
                      <td>{user.updated_at}</td>
                    </tr>
                    <tr>
                      <th>Role</th>
                      <td>{user.role}</td>
                    </tr>
                    {user.vendor && (
                      <tr>
                        <th>Vendor</th>

                        <td className="p-0">
                          <table className="table p-0 table-bordered table-hover">
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
