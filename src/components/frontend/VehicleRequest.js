import React from "react";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { useState } from "react";
import { MyBookings } from "./MyBookings";
import { VendorDashboard } from "./VendorDashboard";

export const VehicleRequest = () => {
  const [requestList, setRequestList] = useState([]);
  const [status, setStatus] = useState();
  const fetchVehicleRequest = async () => {
    await useAxios
      .get("/getRequestList")
      .then((res) => {
        setRequestList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error");
      });
  };
  const updateA = async (id, is_approved) => {
    await useAxios
      .put(`/changeRentalStatus/${id}`, { is_approved: is_approved })
      .then((res) => {
        alert("status updated");
      });
  };
  useEffect(() => {
    fetchVehicleRequest();
  }, []);

  return (
    <div>
      <VendorDashboard />
      <div className="container m-5">
        <div className="flex flex-wrap px-4 ">
          <div className="w-full px-4">
            <div className="mx-auto text-center">
              <div className="flex flex-wrap mx-4">
                {requestList.map((item) => {
                  return (
                    <div className="relative w-1/3 mb-12">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={`http://localhost:8000/storage/${item.vehicle.image}`}
                          alt="portfolio"
                          className="w-full"
                          style={{ height: "500px", width: "500px" }}
                        />
                      </div>
                      <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg py-9 mx-7">
                        <h3 className="mb-4 text-xl font-bold text-dark">
                          {item.vehicle.name}
                        </h3>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Start Date: {item.start_date}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          End Date: {item.end_date}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Requested By: {item.user.name}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Destination: {item.destination}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Total Amount:{item.total_amount}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Citizenship Number: {item.user.citizenship_number}
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Citizenship Image:{" "}
                          <img
                            src={`http://localhost:8000/storage/${item.user.citizenship_image}`}
                            alt="portfolio"
                            className="w-full"
                            style={{ height: "250px", width: "250px" }}
                          />
                        </span>
                        <span className="block mb-2 text-sm font-semibold text-primary">
                          Customer:{" "}
                          <img
                            src={`http://localhost:8000/storage/${item.user.image}`}
                            alt="portfolio"
                            className="w-full"
                            style={{ height: "250px", width: "250px" }}
                          />
                        </span>

                        <select
                          name="is_available"
                          id="is_available"
                          // value={item.is_approved}
                          onChange={(e) => updateA(item.id, e.target.value)}
                        >
                          <option
                            selected={item.is_approved === "Pending"}
                            value="Pending"
                          >
                            Pending
                          </option>
                          <option
                            selected={item.is_approved == "Confirmed"}
                            value="Confirmed"
                          >
                            Confirm
                          </option>
                          <option
                            selected={item.is_approved == "Canceled"}
                            value="Canceled"
                          >
                            Canceled
                          </option>
                        </select>
                        {status}

                        {/* <a
                          href="javascript:void(0)"
                          className="inline-block py-3 text-sm font-semibold transition border rounded-md text-body-color px-7 hover:bg-green-900 hover:border-primary hover:text-white"
                        >
                          View Customer Details
                        </a> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
