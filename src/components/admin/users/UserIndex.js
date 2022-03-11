import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";

export const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    await axios.get("http://localhost:8000/api/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getUsers();
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
        .delete(`http://localhost:8000/api/users/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            timer: 2000,
          });
          getUsers();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this user",
            text: "This user is connected with others",
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
          await axios.post("http://localhost:8000/api/users",
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
                      <h3 className="card-title">All Users</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/users/create"
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
                              <th>Image</th>
                              <th>Email</th>
                              <th>Phone</th>

                              <th>Role</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user, index) => (
                              <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                  <img
                                    src={`http://localhost:8000/storage/${user.image}`}
                                    height={60}
                                    width={60}
                                    alt=""
                                  />
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>

                                <td>{user.role}</td>

                                <td>
                                  <Link
                                    to={`/admin/users/edit/${user.id}`}
                                    className="btn btn-link  bg-cyan btn-sm m-1"
                                  >
                                    <i className="fas fa-edit ml-1 mr-1"></i>
                                    Edit
                                  </Link>

                                  <Link
                                    to={`/admin/users/${user.id}`}
                                    className="btn btn-link bg-success btn-sm m-1"
                                  >
                                    <i className="fas fa-eye ml-1 mr-1"></i>
                                    Show
                                  </Link>
                                  <span
                                    onClick={() => handleDelete(user.id)}
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
