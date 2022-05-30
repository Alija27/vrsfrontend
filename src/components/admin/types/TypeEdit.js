import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const TypeEdit = () => {
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [type, setType] = useState({});
  const [loading, setLoading] = useState();
  const { id } = useParams();
  const fetchType = async () => {
    await useAxios.get(`/admin/types/${id}`).then((res) => {
      setType(res.data);
    });
    console.log(type);
  };
  useEffect(() => {
    fetchType(); /* eslint-disable */
  }, []);
  const [image, setImage] = useState(null);

  const handleImage = (files) => {
    setImage(files[0]);
  };
  const handleInputChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
    console.log(user);
  };

  const updatetype = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", type.name);
    data.append("image", image);
    data.append("_method", "PUT");
    setLoading(true);
    await useAxios
      .post(`/admin/types/${id}`, data)
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
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Edit Type</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/types"
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
                        value={type.name}
                      />
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="form-control "
                        onChange={(e) => handleImage(e.target.files)}
                      />
                      <img
                        src={`http://localhost:8000/storage/${type.image}`}
                        width={150}
                        height={150}
                      />
                      {validation.image ? (
                        <div className="text-danger">{validation.image} </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={updatetype}
                        type="submit"
                        id="btnSave"
                        className="btn bg-indigo"
                      >
                        {loading ? (
                          <>
                            <span
                              className="mr-2 spinner-border spinner-border-sm"
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
