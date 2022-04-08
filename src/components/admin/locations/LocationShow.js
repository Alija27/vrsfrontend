import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

const LocationShow = () => {
  const [location, setLocation] = useState({
    user: {},
  });
  const { id } = useParams();
  const fetchLocation = async () => {
    await useAxios.get(`/admin/locations/${id}`).then((res) => {
      setLocation(res.data);
    });
    console.log(location);
  };
  useEffect(() => {
    fetchLocation(); /* eslint-disable */
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="content-wrapper">
            {/* Content Header (Page header) */}

            {/* <div className="card card-primary card-outline"> */}

            <div className="container-fluid">
              <div className="mt-1 row">
                <div className="col-12">
                  <div className="m-2 mt-5 card card-indigo card-outline">
                    <div className="card-header">
                      <div className="card-title">Location Details</div>
                      <div className="card-tools">
                        <Link
                          to={`/admin/locations/edit/${location.id}`}
                          className="mr-1 btn btn-link bg-cyan btn-sm"
                        >
                          <i class="fas fa- mr-1"></i>
                          Edit
                        </Link>
                        <Link
                          to="/admin/locations"
                          className="ml-1 btn btn-link bg-indigo btn-sm"
                        >
                          <i class="fas fa-arrow-left mr-1"></i>
                          Go back
                        </Link>
                      </div>
                    </div>
                    <div className="p-0 card-body">
                      <table className="table table-bordered">
                        <tr>
                          <th>ID</th>
                          <td>{location.id}</td>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <td>{location.name}</td>
                        </tr>
                        <tr>
                          <th>Longitude</th>
                          <td>{location.longitude}</td>
                        </tr>
                        <tr>
                          <th>Latitude</th>
                          <td>{location.latitude}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationShow;
