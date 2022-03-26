import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./layouts/Navbar";
import Vehicles from "./Vehicles";
import AddVehicle from "./AddVehicle";
import "../../index.css";
import "flowbite";
import { RegisteredVehicle } from "./RegisteredVehicle";
const Frontend = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/registeredvehicle" element={<RegisteredVehicle />} />
      </Routes>
    </div>
  );
};

export default Frontend;
