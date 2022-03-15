import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const TypeEdit = () => {
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [type, setType] = useState({});
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const fetchUser = async () => {
    await axios(`http://localhost:8000/api/types/${id}`).then((res) => {
      setType(res.data);
    });
    console.log(type);
  };
  useEffect(() => {
    fetchType(); /* eslint-disable */
  }, []);

  const handleInputChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const updatetype = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(`http://localhost:8000/api/types/${id}`, data)
      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });
        navigate("/admin/types");
      })
      .catch((err) => {
        if (err.response.status == 422) {
          setValidationError(err.response.data.errors);
        } else {
          Swal.fire({
            timer: 2000,
            icon: "error",
            title: err,
          });
        }
      });
    setLoading(false);
  };

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="card m-2">
                <div className="card-header">
                  <h3 className="card-title">Edit User</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/users"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i class="fas fa-arrow-left mr-1"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={updatetype} method="post">
                    <div className="form-group">
                      <label htmlFor="name">
                        Name
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control "
                        onChange={handleInputChange}
                        value={user.name}
                      />
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-group my-2">
                      <button
                        onClick={updateuser}
                        type="submit"
                        id="btnSave"
                        className="btn bg-indigo"
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm mr-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Updating...</span>
                          </>
                        ) : (
                          "Update"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeEdit;
