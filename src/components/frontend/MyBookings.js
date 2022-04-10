import React from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MyBookings = () => {
  const [user, fetchUser] = useContext(UserContext);
  const [rentals, setRentals] = useState([]);

  const getMyBookings = () => {
    useAxios
      .get("/getMyBookings")
      .then((res) => {
        setRentals(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("error");
      });
  };
  useEffect(() => {
    fetchUser();

    getMyBookings();
  }, []);
  return (
    <div>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap w-1/2 mx-auto ">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="py-2">
                    <tr className="text-center bg-indigo-300">
                      <th className="py-2">SN</th>
                      <th>Vehicle</th>
                      <th>Image</th>

                      <th>Status</th>
                      <th>Total Amount</th>
                      <th>Give Review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentals.map((item, index) => (
                      <tr className="w-1/2 text-center bg-gray-300 ">
                        <td className="py-2">{index}</td>
                        <td>{item.vehicle.name}</td>
                        <td>
                          <img
                            alt="image"
                            src={`http://localhost:8000/storage/${item.vehicle.image}`}
                            className="py-2 align-middle border-none shadow-xl lg:-ml-16"
                            style={{ maxWidth: 200, maxHeight: 200 }}
                          />
                        </td>
                        <td>{item.is_approved}</td>
                        <td>{item.total_amount}</td>
                        <td>
                          <Link
                            className="p-1 text-white bg-indigo-500"
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
      </section>
    </div>
  );
};
