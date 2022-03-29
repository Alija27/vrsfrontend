import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./layouts/Navbar";
import Vehicles from "./Vehicles";
import AddVehicle from "./AddVehicle";
import "../../index.css";
import "flowbite";
import { RegisteredVehicle } from "./RegisteredVehicle";
import BookVehiclePage from "./BookVehiclePage";
import { VendorDashboard } from "./VendorDashboard";
import { VehicleRequest } from "./VehicleRequest";
import { MyBookings } from "./MyBookings";
import { ViewVehicle } from "./ViewVehicle";
import { Profile } from "./Profile";

const Frontend = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/registeredvehicle" element={<RegisteredVehicle />} />
        <Route path="/book" element={<BookVehiclePage />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
        <Route path="/vehiclerequest" element={<VehicleRequest />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/vehicles/:id" element={<ViewVehicle />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Frontend;
