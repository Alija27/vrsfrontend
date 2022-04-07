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
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-center bg-primary">
                      <th>SN</th>
                      <th>Vehicle</th>
                      <th>Image</th>

                      <th>Status</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentals.map((item, index) => (
                      <tr className="text-center bg-primary">
                        <td>{index}</td>
                        <td>{item.vehicle.name}</td>
                        <td>{item.vehicle.image}</td>
                        <td>{item.is_approved}</td>
                        <td>{item.total_amount}</td>
                        <td>
                          <Link to={`/review/${item.id}`}>Review</Link>
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
