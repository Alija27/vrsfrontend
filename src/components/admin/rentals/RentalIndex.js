import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";

export const RentalIndex = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRentals = async () => {
    setLoading(true);
    await axios.get("http://localhost:8000/api/rentals").then((res) => {
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
        .delete(`http://localhost:8000/api/rentals/${id}`)
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
                <div className="card mt-2">
                  <div className="card-header">
                    <h3 className="card-title text-bold">All rentals</h3>
                    <div className="card-tools">
                      <Link
                        to="/admin/rentals/create"
                        className="bg-indigo btn btn-link btn-sm "
                      >
                        <i className="fas fa-plus-circle mr-1"></i>Add New
                      </Link>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    {loading ? (
                      <div className=" row justify-content-center">
                        <Spinner />
                      </div>
                    ) : (
                      <table className="table table-bordered table-hover">
                        <thead className="bg-indigo">
                          <tr>
                            <th>ID</th>
                            <th>User_ID</th>
                            <th>Vehicle_ID</th>
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
                              <td>{rental.user_id}</td>
                              <td>{rental.vehicle_id}</td>
                              <td>{rental.start_date}</td>
                              <td>{rental.end_date}</td>
                              <td>{rental.destination}</td>
                              <td>{rental.is_approved}</td>
                              <td>{rental.is_complete}</td>
                              <td>
                                <Link
                                  to={`/admin/rentals/edit/${rental.id}`}
                                  className="btn btn-link  bg-cyan btn-sm m-1"
                                >
                                  <i className="fas fa-edit ml-1 mr-1"></i>
                                  Edit
                                </Link>

                                <Link
                                  to={`/admin/rentals/${rental.id}`}
                                  className="btn btn-link bg-success btn-sm m-1"
                                >
                                  <i className="fas fa-eye ml-1 mr-1"></i>
                                  Show
                                </Link>
                                <span
                                  onClick={() => handleDelete(rental.id)}
                                  className="btn btn-link bg-danger btn-sm m-1"
                                >
                                  <i className="fas fa-trash ml-1 mr-1"></i>
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
