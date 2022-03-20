import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../../index.css";

const Frontend = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Frontend;