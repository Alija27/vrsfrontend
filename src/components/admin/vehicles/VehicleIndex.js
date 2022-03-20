import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";

export const VehicleIndex = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVehicles = async () => {
    setLoading(true);
    console.log("Calling CLient");
    let token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/api/vehicles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setVehicles(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getVehicles();
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
        .delete(`http://localhost:8000/api/vehicles/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getVehicles();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this vehicle",
            text: "This vehicle is connected with others",
          });
        });
    }
  };

  /* state={
         name:'',
      
        };
        handleInput =(e)=>{
          this.setState({
           name: e.target.value
           
          })
          console.log(this.state.name);
        }
         submitCategory= async (e)=>{
         e.preventDefault(); 
          await axios.post("http://localhost:8000/api/vehicles",
         {name: this.state.name
        });
        console.log(this.state.name);
        this.setState({
            name:'',
          }); */

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
                      <h3 className="card-title">All vehicles</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/vehicles/create"
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
                              <th>Vendor</th>
                              <th>Vehicle Type</th>
                              <th>Model</th>

                              <th>Color</th>

                              <th>Image</th>

                              <th>Is Available</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vehicles.map((vehicle, index) => (
                              <tr key={index}>
                                <td>{vehicle.id}</td>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.vendor.name}</td>
                                <td>{vehicle.type.name}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.color}</td>

                                <td>
                                  {vehicle.image && (
                                    <img
                                      src={`http://localhost:8000/storage/${vehicle.image}`}
                                      height={60}
                                      width={60}
                                      alt=""
                                    />
                                  )}
                                </td>
                                <td>
                                  {vehicle.is_available === 1 ? "Yes" : "No"}
                                </td>

                                <td>
                                  <Link
                                    to={`/admin/vehicles/edit/${vehicle.id}`}
                                    className="btn btn-link  bg-cyan btn-sm m-1"
                                  >
                                    <i className="fas fa-edit ml-1 mr-1"></i>
                                    Edit
                                  </Link>

                                  <Link
                                    to={`/admin/vehicles/${vehicle.id}`}
                                    className="btn btn-link bg-success btn-sm m-1"
                                  >
                                    <i className="fas fa-eye ml-1 mr-1"></i>
                                    Show
                                  </Link>
                                  <span
                                    onClick={() => handleDelete(vehicle.id)}
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
