import React, { useContext, useEffect } from "react";
import { Header } from "./layouts/Header";
import { Sidebar } from "./layouts/Sidebar";
import { Footer } from "./layouts/Footer";
import { Dashboard } from "./layouts/Dashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserIndex } from "./users/UserIndex";
import { UserCreate } from "./users/UserCreate";
import { UserShow } from "./users/UserShow";
import UserEdit from "./users/UserEdit";
import Vendor from "./vendors/Vendor";
// import "./css/adminlte.min.css";

import { VendorIndex } from "./vendors/VendorIndex";
import VendorEdit from "./vendors/VendorEdit";
import VendorCreate from "./vendors/VendorCreate";
import { RentalShow } from "./rentals/RentalShow";
import { RentalCreate } from "./rentals/RentalCreate";
import { RentalIndex } from "./rentals/RentalIndex";
import RentalEdit from "./rentals/RentalEdit";
import { ReviewIndex } from "./reviews/ReviewIndex";
import ReviewCreate from "./reviews/ReviewCreate";

import TypeIndex from "./types/TypeIndex";
import TypeCreate from "./types/TypeCreate";
import TypeEdit from "./types/TypeEdit";
import TypeShow from "./types/TypeShow";
import LocationIndex from "./locations/LocationIndex";
import LocationCreate from "./locations/LocationCreate";
import LocationEdit from "./locations/LocationEdit";
import LocationShow from "./locations/LocationShow";
import { VehicleIndex } from "./vehicles/VehicleIndex";
import UserContext from "../../UserContext";
import { VehicleCreate } from "./vehicles/VehicleCreate";
import UserMain from "./users/UserMain";
import { VehicleEdit } from "./vehicles/VehicleEdit";
import { VehicleShow } from "./vehicles/VehicleShow";

const Admin = () => {
  const navigate = useNavigate();

  const [user, fetchUser] = useContext(UserContext);

  const addLinks = () => {
    const jquery = document.createElement("script");
    jquery.id = "jquery";
    jquery.src = "/adminlte/js/jquery.min.js";
    document.body.appendChild(jquery);
    const css = document.createElement("link");
    css.id = "css";
    css.href = "/adminlte/css/adminlte.min.css";
    css.rel = "stylesheet";
    document.head.appendChild(css);
    const bootstrapbundle = document.createElement("script");
    bootstrapbundle.id = "bootstrapbundle";
    bootstrapbundle.src = "/adminlte/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapbundle);
    const adminltejs = document.createElement("script");
    adminltejs.id = "adminltejs";
    adminltejs.src = "/adminlte/js/adminlte.min.js";
    document.body.appendChild(adminltejs);
    document.body.classList.add(
      "hold-transition",
      "sidebar-mini",
      "layout-fixed",
      "layout-avabr-fixed"
    );
  };

  useEffect(() => {
    fetchUser();
    addLinks();
  }, []);

  useEffect(() => {
    if (user.role === "") {
      let jquery = document.getElementById("jquery");
      document.body.removeChild(jquery);

      let css = document.getElementById("css");
      document.head.removeChild(css);

      let bootstrapbundle = document.getElementById("bootstrapbundle");
      document.body.removeChild(bootstrapbundle);

      let adminltejs = document.getElementById("adminltejs");
      document.body.removeChild(adminltejs);

      document.body.classList.remove(
        "hold-transition",
        "sidebar-mini",
        "layout-fixed",
        "layout-avabr-fixed"
      );
      navigate("/");
    }
    if (user.role && user.role !== "Admin") {
      let jquery = document.getElementById("jquery");
      document.body.removeChild(jquery);

      let css = document.getElementById("css");
      document.head.removeChild(css);

      let bootstrapbundle = document.getElementById("bootstrapbundle");
      document.body.removeChild(bootstrapbundle);

      let adminltejs = document.getElementById("adminltejs");
      document.body.removeChild(adminltejs);

      document.body.classList.remove(
        "hold-transition",
        "sidebar-mini",
        "layout-fixed",
        "layout-avabr-fixed"
      );
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <Header />

      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/*" element={<UserMain />} />
        <Route path="/vendors/:id" element={<Vendor />} />
        <Route path="/vendors" element={<VendorIndex />} />
        <Route path="/vendors/edit/:id" element={<VendorEdit />} />
        <Route path="/vendors/create" element={<VendorCreate />} />
        <Route path="/rentals" element={<RentalIndex />} />
        <Route path="/rentals/create" element={<RentalCreate />} />
        <Route path="/rentals/:id" element={<RentalShow />} />
        <Route path="/rentals/edit/:id" element={<RentalEdit />} />
        <Route path="/types" element={<TypeIndex />} />
        <Route path="/types/create" element={<TypeCreate />} />
        <Route path="/types/edit/:id" element={<TypeEdit />} />
        <Route path="/types/:id" element={<TypeShow />} />
        <Route path="/locations" element={<LocationIndex />} />
        <Route path="/locations/:id" element={<LocationShow />} />
        <Route path="/locations/edit/:id" element={<LocationEdit />} />
        <Route path="/locations/create" element={<LocationCreate />} />
        <Route path="/location/create" element={<LocationCreate />} />
        <Route path="/vehicles" element={<VehicleIndex />} />
        <Route path="/vehicles/create" element={<VehicleCreate />} />
        <Route path="/vehicles/edit/:id" element={<VehicleEdit />} />
        <Route path="/vehicles/:id" element={<VehicleShow />} />
        <Route path="/reviews" element={<ReviewIndex />} />
        <Route path="/reviews/create" element={<ReviewCreate />} />
        {/* // <Route path="/vehicles/:id" element={<VehicleShow />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};
export default Admin;
