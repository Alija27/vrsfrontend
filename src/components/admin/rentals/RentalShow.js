import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export const RentalShow = () => {
  const [rental, setRental] = useState({
    user: {},
  });
  const { id } = useParams();
  const fetchRental = async () => {
    await axios(`http://localhost:8000/api/rentals/${id}`).then((res) => {
      setRental(res.data);
    });
    console.log(rental);
  };
  useEffect(() => {
    fetchRental(); /* eslint-disable */
  }, []);

  return (
    <div>
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}

          {/* <div className="card card-primary card-outline"> */}

          <div className="container-fluid">
            <div className="row mt-1">
              <div className="col-12">
                <div className="card card-indigo card-outline m-2 mt-5">
                  <div className="card-header">
                    <div className="card-title">Rental Details</div>
                    <div className="card-tools">
                      <Link
                        to={`/admin/rentals/edit/${rental.id}`}
                        className="btn btn-link bg-cyan btn-sm mr-1"
                      >
                        <i class="fas fa- mr-1"></i>
                        Edit
                      </Link>
                      <Link
                        to="/admin/rentals"
                        className="btn btn-link bg-indigo btn-sm ml-1"
                      >
                        <i class="fas fa-arrow-left mr-1"></i>
                        Go back
                      </Link>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-bordered">
                      <tr>
                        <th>ID</th>
                        <td>{rental.id}</td>
                      </tr>
                      <tr>
                        <th>Customer Name</th>
                        <td>{rental.user.name}</td>
                      </tr>
                      <tr>
                        <th>Start_date</th>
                        <td>{rental.start_date}</td>
                      </tr>
                      <tr>
                        <th>End_date</th>
                        <td>{rental.end_date}</td>
                      </tr>
                      <tr>
                        {" "}
                        <th>Destination</th>
                        <td>{rental.destination}</td>
                      </tr>
                      <tr>
                        <th>Is Approved</th>
                        <td>{rental.is_approved === 1 ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <th>Is Complete</th>
                        <td>{rental.is_complete === 1 ? "Yes" : "No"}</td>
                      </tr>

                      <tr>
                        <th>Remarks</th>
                        <td>{rental.remarks}</td>
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
  );
};
