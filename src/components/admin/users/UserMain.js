import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserCreate } from "./UserCreate";
import UserEdit from "./UserEdit";
import { UserIndex } from "./UserIndex";
import { UserShow } from "./UserShow";

const UserMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserIndex />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/:id" element={<UserShow />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
};

export default UserMain;
