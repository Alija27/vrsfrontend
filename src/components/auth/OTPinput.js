import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPinput = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const verify = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/api/OTPVerification`, {
        otp,
        user_id: sessionStorage.getItem("user_id"),
        // aba kun id ko token ho bhnera verify garna lai yesma ni pathauna paro
      })

      .then((res) => {
        if (res.data.error === "OTP not Matched") {
          seterror(res.data.error);
        } else {
          navigate("/changePassword");
        }
      })
      .catch();
  };
  return (
    <div>
      <div className="w-full max-w-sm p-6 m-20 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          OTP Verification
        </h1>
        <form onSubmit={verify}>
          {error}
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              OTP
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="otp"
              onChange={(e) => setOTP(e.target.value)}
              placeholder="OTP"
            />
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPinput;
