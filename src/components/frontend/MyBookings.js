import React from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const MyBookings = () => {
  const [user, fetchUser] = useContext(UserContext);
  const [rentals, setRentals] = useState({});

  const getMyBookings = () => {
    useAxios
      .get("/bookedVehicles")
      .then((res) => {
        setRentals(res.data);
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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SN</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rentals &&
            rentals.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.vehicle.name}</td>
                <td>{item.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
