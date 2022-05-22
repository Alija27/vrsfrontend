import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import VehicleCard from "./VehicleCard";
import { VendorDashboard } from "./VendorDashboard";
export const RegisteredVehicle = () => {
  const [validationError, setValidationError] = useState({});
  const [user, fetchUser] = useContext(UserContext);
  const [registeredVehicles, setRegisteredVehicles] = useState([]);
  const [vehicleData, setvehicleData] = useState({
    is_available: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setvehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    console.log(vehicleData);
  };
  useEffect(() => {
    fetchUser();
    getvehicles();
    console.log(user);
    console.log(user.vendor.id);
  }, []);
  const getvehicles = () => {
    useAxios
      .get("/registeredvehicles")
      .then((res) => {
        setRegisteredVehicles(res.data);
      })
      .catch((err) => {
        setValidationError(err.response.data.errors);
      });
  };
  return (
    <div>
      <VendorDashboard />
      {user && user.vendor && user.vendor.name}
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* {JSON.stringify(registeredVehicles)} */}
        {registeredVehicles.map((registeredVehicle) => (
          <VehicleCard vehicle={registeredVehicle} />
        ))}
      </div>
    </div>
  );
};
