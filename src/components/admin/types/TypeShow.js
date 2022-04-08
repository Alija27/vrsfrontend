import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
const TypeShow = () => {
  const [type, setType] = useState({
    vehicles: [],
  });
  const { id } = useParams();
  const fetchType = async () => {
    await useAxios.get(`/admin/types/${id}`).then((res) => {
      setType(res.data);
    });
  };
  useEffect(() => {
    fetchType();
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
                  <div className="card-title">Type Details</div>
                  <div className="card-tools">
                    <Link
                      to={`/admin/types/edit/${type.id}`}
                      className="mr-1 btn btn-link bg-cyan btn-sm"
                    >
                      <i className="mr-1 fas fa-"></i>
                      Edit
                    </Link>
                    <Link
                      to="/admin/types"
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
                      <td>{type.name}</td>
                    </tr>
                    <tr>
                      <th>Created At</th>
                      <td>{type.created_at}</td>
                    </tr>
                    <tr>
                      <th>Updated At</th>
                      <td>{type.updated_at}</td>
                    </tr>
                    {type.vehicles && (
                      <tr>
                        <th>Vehicles</th>

                        <td className="p-0">
                          <table className="table p-0 table-bordered table-hover">
                            <thead className="bg-indigo">
                              <tr>
                                {/*  <th>Id</th> */}
                                <th>SN</th>
                                <th>Name</th>
                                {/* <th>Address</th>
                        <th>Phone</th>
                        <th>User ID</th>
                        <th>Image</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {type.vehicles.map((el, index) => (
                                <tr>
                                  {/* <td>{user.vendor.id}</td> */}

                                  <td>{index + 1}</td>
                                  <td>{el.name}</td>

                                  {/*  <td>{user.vendor.address}</td>
                          <td>{user.vendor.phone}</td>
                          <td>{user.vendor.user_id}</td>
                          <td>{user.vendor.image}</td> */}
                                </tr>
                              ))}
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

export default TypeShow;
