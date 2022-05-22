import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const changePassword = async (e) => {
    e.preventDefault();
    await useAxios
      .put(`/changePassword/${sessionStorage.getItem("user_id")}`, {
        password,
        password_confirmation: passwordconfirmation,
      })
      .then((res) => {
        sessionStorage.clear();
        Swal.fire({
          icon: "Success",
          title: res.data.message,
        });
        navigate("/login");
      });
  };
  return (
    <div>
      <div className="w-full max-w-sm p-6 m-20 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Change Password
        </h1>
        <form onSubmit={changePassword}>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              New Password
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Confirm Password
            </label>
            <input
              type="text"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password_confirmation"
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-gray-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
