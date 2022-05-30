import React from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const MyBookings = () => {
  const [user, fetchUser] = useContext(UserContext);
  const [rentals, setRentals] = useState([]);
  const [cancelbooking, setCancelBooking] = useState({});

  const getMyBookings = () => {
    useAxios
      .get("/getMyBookings")
      .then((res) => {
        setRentals(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchUser();
    getMyBookings();
  }, []);

  const cancelBooking = async (id) => {
    await useAxios
      .put(`/cancelBooking/${id}`, { is_approved: "Canceled" })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "You have canceled your booking",
          timer: 2000,
        });
      });
    getMyBookings();
  };
  return (
    <div>
      <div class="flex flex-col m-10">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full border-2 overflow-x-hidden lg:overflow-hidden">
                <thead class="border-b bg-indigo-500">
                  <tr className="text-center">
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      SN
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Vehicle
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Cancel Booking
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Give Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rentals.map((item, index) => (
                    <tr className="w-1/2 ">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.vehicle.name}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img
                          alt="image"
                          src={`http://localhost:8000/storage/${item.vehicle.image}`}
                          className="py-2 align-middle border-none shadow-xl lg:-ml-16"
                          style={{ maxWidth: 200, maxHeight: 200 }}
                        />
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.is_approved}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          disabled={item.is_approved === "Confirmed"}
                          className="p-2 bg-red-500"
                          onClick={(e) => cancelBooking(item.id)}
                        >
                          Cancel
                        </button>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.start_date}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.end_date}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.total_amount}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Link
                          className="p-1 px-5 text-white bg-indigo-500 rounded "
                          to={`/vehicledetails/${item.vehicle.id}`}
                        >
                          Review
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
