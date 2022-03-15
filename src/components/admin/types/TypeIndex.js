import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";

const TypeIndex = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTypes = async () => {
    setLoading(true);
    await axios.get("http://localhost:8000/api/types").then((res) => {
      setTypes(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getTypes();
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
        .delete(`http://localhost:8000/api/types/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getTypes();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this Type",
            text: "This Type is connected with others",
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
                  <div className="card mt-2">
                    <div className="card-header">
                      <h3 className="card-title">All Types</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/types/create"
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
                              <th>Id</th>
                              <th>Name</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {types.map((type, index) => (
                              <tr key={index}>
                                <td>{type.id}</td>
                                <td>{type.name}</td>

                                <td>
                                  <Link
                                    to={`/admin/types/edit/${type.id}`}
                                    className="btn btn-link  bg-cyan btn-sm m-1"
                                  >
                                    <i className="fas fa-edit ml-1 mr-1"></i>
                                    Edit
                                  </Link>

                                  <Link
                                    to={`/admin/types/${type.id}`}
                                    className="btn btn-link bg-success btn-sm m-1"
                                  >
                                    <i className="fas fa-eye ml-1 mr-1"></i>
                                    Show
                                  </Link>
                                  <span
                                    onClick={() => handleDelete(type.id)}
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
    </div>
  );
};

export default TypeIndex;
