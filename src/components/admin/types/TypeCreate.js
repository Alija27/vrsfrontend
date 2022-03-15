import React from "react";
import { Link, Navigate } from "react-router-dom";
/* import { useState } from "react";
import axios from "axios";

const TypeCreate = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState({});

  const submitType = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/users")
      .then((res) => {
        Navigate("admin/types");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="card m-2">
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
                  <form onsubmit={submitType} method="post">
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
                        onChange={handleInput}
                        id="name"
                        className="form-control "
                      />
                    </div>

                    <div className="form-group my-2">
                      <button
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
 */
