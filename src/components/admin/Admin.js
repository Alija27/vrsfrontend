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

import { VendorIndex } from "./vendors/VendorIndex";
import VendorEdit from "./vendors/VendorEdit";
import VendorCreate from "./vendors/VendorCreate";
import { RentalShow } from "./rentals/RentalShow";
import { RentalCreate } from "./rentals/RentalCreate";
import { RentalIndex } from "./rentals/RentalIndex";

import TypeIndex from "./types/TypeIndex";
import UserContext from "../../UserContext";
export const Admin = () => {
  const navigate = useNavigate();

  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user.role && user.role !== "Admin") {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <Header />

      <Sidebar />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<UserIndex />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserShow />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />

        <Route path="/vendors/:id" element={<Vendor />} />
        <Route path="/vendors" element={<VendorIndex />} />
        <Route path="/vendors/edit/:id" element={<VendorEdit />} />
        <Route path="/vendors/create" element={<VendorCreate />} />

        <Route path="/rentals" element={<RentalIndex />} />
        <Route path="/rentals/create" element={<RentalCreate />} />
        <Route path="/rentals/:id" element={<RentalShow />} />

        <Route path="/types" element={<TypeIndex />} />
      </Routes>
      <Footer />
    </div>
  );
};
