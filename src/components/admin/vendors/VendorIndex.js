import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";
import UserContext from "../../../UserContext";
import useAxios from "../../../hooks/useAxios";

export const VendorIndex = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const getVendors = async () => {
    setLoading(true);
    await useAxios.get("/admin/vendors").then((res) => {
      setVendors(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getVendors();
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
        .delete(`/vendors/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getVendors();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this Vendor",
            text: "This Vendor is connected with others",
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
          await axios.post("http://localhost:8000/api/Vendors",
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
                  <div className="mt-2 card">
                    <div className="card-header">
                      <h3 className="card-title">All Vendors</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/Vendors/create"
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
                              <th>Image</th>
                              <th>Address</th>
                              <th>Phone</th>

                              <th>User Name</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vendors.map((vendor, index) => (
                              <tr key={index}>
                                <td>{vendor.id}</td>
                                <td>{vendor.name}</td>
                                <td>
                                  <img
                                    src={`http://localhost:8000/storage/${vendor.image}`}
                                    height={60}
                                    width={60}
                                    alt=""
                                  />
                                </td>
                                <td>{vendor.address}</td>
                                <td>{vendor.phone}</td>

                                <td>{vendor.user.name}</td>

                                <td>
                                  <Link
                                    to={`/admin/vendors/edit/${vendor.id}`}
                                    className="m-1 btn btn-link bg-cyan btn-sm"
                                  >
                                    <i className="ml-1 mr-1 fas fa-edit"></i>
                                    Edit
                                  </Link>

                                  <Link
                                    to={`/admin/vendors/${vendor.id}`}
                                    className="m-1 btn btn-link bg-success btn-sm"
                                  >
                                    <i className="ml-1 mr-1 fas fa-eye"></i>
                                    Show
                                  </Link>
                                  <span
                                    onClick={() => handleDelete(vendor.id)}
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
