import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../Spinner";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

export const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMessages = async () => {
    setLoading(true);
    await useAxios.get("/admin/contacts").then((res) => {
      setMessages(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getMessages();
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
        .delete(`/admin/contacts/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Message Deleted Sucessfully",
            timer: 2000,
          });
          getMessages();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: /* res.response.data.errors */ "Cannot delete this review",
            text: "This review is connected with others",
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
          await axios.post("http://localhost:8000/api/reviews",
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
                      <h3 className="card-title">All Contacts</h3>
                      <div className="card-tools">
                        {/* <Link
                          to="/admin/reviews/create"
                          className="bg-indigo btn btn-link btn-sm "
                        >
                          <i className="mr-1 fas fa-plus-circle"></i>Add New
                        </Link> */}
                      </div>
                    </div>

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
                              <th>Vehicle Id</th>
                              <th>User ID</th>
                              <th>Message</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {messages.map((contact, index) => (
                              <tr key={index}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phonenumber}</td>
                                <td>{contact.message}</td>

                                <td>
                                  <span
                                    onClick={() => handleDelete(contact.id)}
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
