import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Spinner } from "../../Spinner";
const LocationIndex = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLocations = async () => {
    setLoading(true);
    await useAxios.get("/admin/locations").then((res) => {
      setLocations(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getLocations();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      return res.isConfirmed;
    });

    if (isConfirmed) {
      await useAxios
        .delete(`/admin/locations/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getLocations();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this location",
            text: "This location is connected with others",
          });
        });
    }
  };
  return (
    <div>
      <div>
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="mt-2 card">
                    <div className="card-header">
                      <h3 className="card-title">All Reviews</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/locations/create"
                          className="bg-indigo btn btn-link btn-sm "
                        >
                          <i className="mr-1 fas fa-plus-circle"></i>Add New
                        </Link>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="p-0 card-body">
                      {loading ? (
                        <div className=" row justify-content-center">
                          <Spinner />
                        </div>
                      ) : (
                        <table className="table table-bordered table-hover">
                          <thead className="bg-indigo">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Latitude</th>
                              <th>Longitude</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {locations.map((location, index) => (
                              <tr key={index}>
                                <td>{location.id}</td>
                                <td>{location.name}</td>
                                <td>{location.longitude}</td>
                                <td>{location.latitude}</td>
                                <td>
                                  <Link
                                    to={`/admin/locations/edit/${location.id}`}
                                    className="m-1 btn btn-link bg-cyan btn-sm"
                                  >
                                    <i className="ml-1 mr-1 fas fa-edit"></i>
                                    Edit
                                  </Link>
                                  <Link
                                    to={`/admin/locations/${location.id}`}
                                    className="m-1 btn btn-link bg-success btn-sm"
                                  >
                                    <i className="ml-1 mr-1 fas fa-eye"></i>
                                    Show
                                  </Link>
                                  <span
                                    onClick={() => handleDelete(location.id)}
                                    className="m-1 btn btn-link bg-danger btn-sm"
                                  >
                                    <i className="ml-1 mr-1 fas fa-trash"></i>
                                    Delete
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>

                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </section>
        </div>
        {/* /.container-fluid */}

        {/* /.content */}
      </div>
    </div>
  );
};

export default LocationIndex;
