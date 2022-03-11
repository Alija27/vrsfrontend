import React from "react";
import { Header } from "./layouts/Header";
import { Sidebar } from "./layouts/Sidebar";
import { Footer } from "./layouts/Footer";
import { Dashboard } from "./layouts/Dashboard";
import { Routes, Route } from "react-router-dom";
import { UserIndex } from "./users/UserIndex";
import { UserCreate } from "./users/UserCreate";
import { UserShow } from "./users/UserShow";
import UserEdit from "./users/UserEdit";

/* import { VendorIndex } from "./vendors/VendorIndex"; */

import { RentalIndex } from "./rentals/RentalIndex";

export const Admin = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserIndex />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserShow />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />

        {/* <Route path="/vendors" element={<VendorIndex />} /> */}

        <Route path="/rentals" element={<RentalIndex />} />
      </Routes>
      <Footer />
    </div>
  );
};
