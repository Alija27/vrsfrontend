import { useState, useEffect } from "react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    fetchUser();

    console.log(user);
    console.log(user.vendor.id);
  }, []);

  return (
    <div className="items-center">
      <span>Profile</span>
      <div>Name:{user.name}</div>
      <div>Email:{user.email}</div>
      <div>Address:{user.address}</div>
      <div>Phone:{user.phone}</div>
      <div>
        Image:{" "}
        <img src={`http://localhost:8000/storage/${user.image}`} alt="image" />
      </div>
      <div>
        Citizenship Image:{" "}
        <img
          src={`http://localhost:8000/storage/${user.citizenship_image}`}
          alt="citizen"
        />
      </div>
      <div>Citizenship Number:{user.citizenship_number}</div>
      <div>Role:{user.role}</div>
      <Link
        className="m-5 text-white bg-indigo-700 rounded-md "
        to="/edit-profile"
      >
        Edit
      </Link>
    </div>
  );
};
