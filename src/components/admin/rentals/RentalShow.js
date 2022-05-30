import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

export const RentalShow = () => {
  const [rental, setRental] = useState({
    user: {},
  });
  const { id } = useParams();
  const fetchRental = async () => {
    await useAxios.get(`/admin/rentals/${id}`).then((res) => {
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
            <div className="mt-1 row">
              <div className="col-12">
                <div className="m-2 mt-5 card card-indigo card-outline">
                  <div className="card-header">
                    <div className="card-title">Rental Details</div>
                    <div className="card-tools">
                      <Link
                        to={`/admin/rentals/edit/${rental.id}`}
                        className="mr-1 btn btn-link bg-cyan btn-sm"
                      >
                        <i class="fas fa- mr-1"></i>
                        Edit
                      </Link>
                      <Link
                        to="/admin/rentals"
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
