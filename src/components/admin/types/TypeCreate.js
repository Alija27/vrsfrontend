import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const TypeCreate = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setValidationError] = useState({});
  const [type, setType] = useState({
    name: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleInput = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };
  const handleImage = (files) => {
    setImage(files[0]);
  };
  const submitType = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", type.name);
    data.append("image", image);

    await useAxios
      .post("/admin/types", data)
      .then((res) => {
        navigate("/admin/types");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setValidationError(err.response.data.errors);
        } else {
          Swal.fire({
            timer: 2000,
            icon: "error",
            title: err,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Add New Vehicle Type</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/types"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitType}>
                    <div className="form-group">
                      <label htmlFor="name">
                        Name
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      {validation.name ? (
                        <div className="text-danger">{validation.name} </div>
                      ) : (
                        ""
                      )}
                      <input
                        type="text"
                        name="name"
                        onChange={handleInput}
                        id="name"
                        className="form-control "
                      />
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
                      {validation.image ? (
                        <div className="text-danger">{validation.image}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="my-2 form-group">
                      <button
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
                            <span>Saving...</span>
                          </>
                        ) : (
                          "Create"
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

export default TypeCreate;
