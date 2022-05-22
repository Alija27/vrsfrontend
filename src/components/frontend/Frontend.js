import VehiclesPage from "./VehiclesPage";
import ChangePassword from "../auth/ChangePassword";
import OTPinput from "../auth/OTPinput";
import { ForgetPassword } from "../auth/ForgetPassword";
import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Navbar } from "./layouts/Navbar";
import Vehicles from "./Vehicles";
import AddVehicle from "./AddVehicle";
import "../../index.css";
import "flowbite";
import { RegisteredVehicle } from "./RegisteredVehicle";
import { VendorDashboard } from "./VendorDashboard";
import { VehicleRequest } from "./VehicleRequest";
import { MyBookings } from "./MyBookings";
import { ViewVehicle } from "./ViewVehicle";
import { Profile } from "./Profile";
import { EditProfile } from "./EditProfile";
import VendorRegister from "./VendorRegister";
import { EditVehicle } from "./EditVehicle";
import EditVendor from "./EditVendor";
import { VendorProfile } from "./VendorProfile";
import VehicleDetails from "./VehicleDetails";

const Frontend = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/vehiclespage" element={<Vehicles />} />
        <Route path="/registeredvehicle" element={<RegisteredVehicle />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
        <Route path="/vehiclerequest" element={<VehicleRequest />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/vehicles/:id" element={<ViewVehicle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/editvehicle/:id" element={<EditVehicle />} />
        <Route path="/edit-vendor/:id" element={<EditVendor />} />
        <Route path="/vendorprofile" element={<VendorProfile />} />
        <Route path="/vehicledetails/:id" element={<VehicleDetails />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/OTPverification" element={<OTPinput />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </div>
  );
};

export default Frontend;
