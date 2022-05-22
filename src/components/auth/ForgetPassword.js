import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const postEmail = async (e) => {
    e.preventDefault();
    console.log(email);
    await axios
    // yo link ma jada tyo email hanesi
      .post(`http://localhost:8000/api/forgotpassword`, {
        email,
      })
      .then((res) => {
        sessionStorage.setItem("user_id", res.data);
        // js ma session banauni yesari ho k ah lina lai getItem 
        console.log(res.data);
        navigate("/OTPverification");
      })
      .catch();
  };

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-20 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Forgot Password
        </h1>
        <form onSubmit={postEmail}>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              placeholder="Email"
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-gray-600"
          >
            Send OTP to Email
          </button>
        </form>
      </div>
    </div>
  );
};
