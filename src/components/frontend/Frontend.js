import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./layouts/Navbar";
import Vehicles from "./Vehicles_Test";
import AddVehicle from "./AddVehicle";
import "../../index.css";

const Frontend = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  );
};

export default Frontend;
