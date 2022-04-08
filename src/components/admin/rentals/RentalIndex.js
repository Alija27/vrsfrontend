import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

export const RentalIndex = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRentals = async () => {
    setLoading(true);
    await useAxios.get("/admin/rentals").then((res) => {
      setRentals(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getRentals();
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
      await axios
        .delete(`/admin/rentals/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getRentals();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this rental",
            text: "This rental is connected with others",
          });
        });
    }
  };
  return (
    <div>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="mt-2 card">
                  <div className="card-header">
                    <h3 className="card-title text-bold">All rentals</h3>
                    <div className="card-tools">
                      <Link
                        to="/admin/rentals/create"
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
                            <th>ID</th>
                            <th>User</th>
                            <th>Vehicle</th>
                            <th>Start Date</th>
                            <th>End Date</th>

                            <th>Destination</th>

                            <th>Is Approved</th>
                            <th>Is Complete</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rentals.map((rental, index) => (
                            <tr key={index}>
                              <td>{rental.id}</td>
                              <td>{rental.user.name}</td>
                              <td>{rental.vehicle.name}</td>
                              <td>{rental.start_date}</td>
                              <td>{rental.end_date}</td>
                              <td>{rental.destination}</td>
                              <td>{rental.is_approved === 1 ? "Yes" : "No"}</td>
                              <td>{rental.is_complete === 1 ? "Yes" : "No"}</td>
                              <td>
                                <Link
                                  to={`/admin/rentals/edit/${rental.id}`}
                                  className="m-1 btn btn-link bg-cyan btn-sm"
                                >
                                  <i className="ml-1 mr-1 fas fa-edit"></i>
                                  Edit
                                </Link>

                                <Link
                                  to={`/admin/rentals/${rental.id}`}
                                  className="m-1 btn btn-link bg-success btn-sm"
                                >
                                  <i className="ml-1 mr-1 fas fa-eye"></i>
                                  Show
                                </Link>
                                <span
                                  onClick={() => handleDelete(rental.id)}
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
  );
};
