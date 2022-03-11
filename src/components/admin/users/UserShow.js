<<<<<<< HEAD
import React from "react";
=======
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
>>>>>>> 7bea311a973895f4dd1806e9eaed035ad84374d4

export const UserShow = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const fetchUser = async () => {
    await axios(`http://localhost:8000/api/users/${id}`).then((res) => {
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
<<<<<<< HEAD
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>User Details</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* interactive chart */}
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="far fa-chart-bar" />
                      User
                    </h3>
                    <div className="card-tools">Go back</div>
                  </div>
                  <div className="card-body">
                    <div id="interactive" style={{ height: 300 }} />
                  </div>
                  {/* /.card-body*/}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
        </section>
=======
        <div className="container-fluid">
          <div className="row mt-1">
            <div className="col-12">
              <div className="card m-2 mt-5">
                <div className="card-header">
                  <div className="card-title">User Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/users/edit/${user.id}`}
                      className="btn btn-link bg-cyan btn-sm mr-1"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/admin/users"
                      className="btn btn-link bg-indigo btn-sm ml-1"
                    >
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
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Image</th>
                      <td>
                        <img
                          src={`http://localhost:8000/storage/${user.image}`}
                          height={200}
                          width={200}
                          alt=""
                        />
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
                        <td>{user.vendor.name}</td>
                      </tr>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> 7bea311a973895f4dd1806e9eaed035ad84374d4
      </div>
    </div>
  );
};
