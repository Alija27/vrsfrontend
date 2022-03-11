import React from "react";
import { Header } from "./components/admin/layouts/Header";
import { Sidebar } from "./components/admin/layouts/Sidebar";
import { Footer } from "./components/admin/layouts/Footer";
import { Dashboard } from "./components/admin/layouts/Dashboard";
import { Routes, Route } from "react-router-dom";
import { UserIndex } from "./components/admin/users/UserIndex";
import { UserCreate } from "./components/admin/users/UserCreate";
import { UserShow } from "./components/admin/users/UserShow";

export const Admin = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/users" element={<UserIndex />} />
        <Route exact path="/users/create" element={<UserCreate />} />
        <Route exact path="/users/show" element={<UserShow />} />
      </Routes>
      <Footer />
    </div>
  );
};
