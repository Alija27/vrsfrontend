import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ReviewCreate = () => {
  const [loading, setLoading] = useState(false);
  const [review, setreview] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    setreview({ name: e.target.value });
  };
  const submitreview = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/reviews", review)
      .then((res) => {
        navigate("/admin/reviews");
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
                  <h3 className="card-title">Add New Vehicle review</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/reviews"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitreview}>
                    <div className="form-group">
                      <label htmlFor="rental_id">
                        Rental ID
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="rental_id"
                        onChange={handleInput}
                        id="rental_id"
                        className="form-control "
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rental_id">
                        User ID
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="user_id"
                        onChange={handleInput}
                        id="user_id"
                        className="form-control "
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">
                        Message
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <textarea
                        name="user_id"
                        onChange={handleInput}
                        id="user_id"
                        className="form-control "
                      ></textarea>
                    </div>
                    <div className="form-check form-check-inline ">
                      <label htmlFor="rental_id">
                        Stars
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>

                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="stars"
                          defaultValue="1"
                        />
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="stars"
                          defaultValue="2"
                        />
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="stars"
                          defaultValue="3"
                        />
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="stars"
                          defaultValue="4"
                        />
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="stars"
                          defaultValue="5"
                        />
                      </div>
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

export default ReviewCreate;
