import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
    citizenship_number: "",
  });
  const [image, setImage] = useState(null);
  const [citizenshipimage, setCitizenshipimage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const handleCitizenshipImage = (files) => {
    setCitizenshipimage(files[0]);
    console.log(citizenshipimage);
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", userData.name);
    data.append("image", image);
    data.append("phone", userData.phone);
    data.append("email", userData.email);
    data.append("password", userData.password);
    data.append("address", userData.address);
    data.append("role", userData.role);
    data.append("citizenship_number", userData.citizenship_number);
    data.append("citizenship_image", citizenshipimage);
    await axios

      .post("http://localhost:8000/api/register", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/login");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setValidationError(err.response.data.errors);
        } else {
          Swal.fire({
            timer: 2000,
            icon: "error",
            title: err,
          });
        }
      });
    setLoading(false);
  };

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-20 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Register
        </h1>
        <form onSubmit={submitUserData}>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="mb-6 form-group">
            <input
              type="hidden"
              name="vendor_id"
              value={user.id}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              placeholder="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Phone
            </label>
            <input
              type="phone"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="phone"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Address
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="address"
              placeholder="Address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="citizenship_image"
              className="inline-block text-gray-700 form-label"
            >
              Citizenship Image
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="citizenship_image"
              type="file"
              onChange={(e) => handleCitizenshipImage(e.target.files)}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="citizenship_number"
              className="inline-block text-gray-700 form-label"
            >
              Citizenship Number
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="citizenship_number"
              placeholder="Citizenship Number"
              value={userData.citizenship_number}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4 ">
            <label
              htmlFor="formFileSm"
              className="inline-block text-gray-700 form-label"
            >
              Role
            </label>
            <select
              name="role"
              value={userData.role}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Role</option>
              <option value="Vendor">Vendor</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="inline-block text-gray-700 form-label"
            >
              Image
            </label>
            <input
              className="block w-full px-2 py-1 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="image"
              type="file"
              onChange={(e) => handleImage(e.target.files)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-gray-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
