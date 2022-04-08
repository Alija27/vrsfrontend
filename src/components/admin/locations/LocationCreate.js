import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
const LocationCreate = () => {
  const [locationData, setLocationData] = useState({
    name: "",
    latitude: "",
    longitude: "",
  });

  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setLocationData({ ...locationData, [e.target.name]: e.target.value });
    console.log(locationData);
  };

  const submitLocationData = async (e) => {
    e.preventDefault();
    setLoading(true);

    await useAxios

      .post("/admin/locations", locationData)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/admin/locations");
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
    setLoading(false);
  };

  const getVehicles = async () => {
    await axios.get("/admin/vehicles").then((res) => {
      setVehicles(res.data);
    });
  };
  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="m-2 card">
                <div className="card-header">
                  <h3 className="card-title">Add New Location</h3>
                  <div className="card-tools">
                    <Link
                      to="/admin/locations"
                      className="btn-link btn-sm bg-indigo"
                    >
                      <span>
                        <i className="mr-1 fas fa-arrow-left"></i>Go Back
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={submitLocationData} method="post">
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
                        value={locationData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="latitude">
                        Latitude
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="latitude"
                        id="latitude"
                        className="form-control "
                        value={locationData.latitude}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="longitude">
                        Longitude
                        <span className="text-danger" title="Required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="longitude"
                        id="longitude"
                        className="form-control "
                        value={locationData.longitude}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-2 form-group">
                      <button
                        onClick={submitLocationData}
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
export default LocationCreate;
