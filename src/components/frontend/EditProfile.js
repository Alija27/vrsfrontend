import React from "react";

import { Link } from "react-router-dom";
import "../../index.css";
import useAxios from "../../hooks/useAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { useContext } from "react";

import UserContext from "../../UserContext";

export const EditProfile = () => {
  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    fetchUser();

    console.log(user);
    console.log(user.vendor.id);
  }, []);

  /* const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
    citizenship_number: "",
  }); */
  const [image, setImage] = useState(null);
  const [citizenshipimage, setCitizenshipimage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    /* setUser({ ...user, [e.target.name]: e.target.value }); */
    console.log(user);
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
    data.append("name", user.name);
    data.append("image", image);
    data.append("phone", user.phone);
    data.append("email", user.email);
    data.append("password", user.password);
    data.append("address", user.address);
    data.append("role", user.role);
    data.append("citizenship_number", user.citizenship_number);
    data.append("citizenship_image", citizenshipimage);
    await axios

      .post("http://localhost:8000/api/updateProfile", data, {
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
      Edit
      <div class="flex justify-center w-full p-6 rounded-lg  bg-white ">
        <div className="w-1/2 p-10 shadow-lg">
          <form onSubmit={submitUserData}>
            <div className="mb-6 form-group">
              <label
                htmlFor="formFileSm"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="name"
                placeholder="Name"
                value={user.name}
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

            <div className="mb-6 form-group">
              <label
                htmlFor="formFileSm"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="email"
                placeholder="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
              <label
                htmlFor="formFileSm"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Phone
              </label>
              <input
                type="phone"
                className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="phone"
                placeholder="Phone Number"
                value={user.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
              <label
                htmlFor="formFileSm"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="address"
                placeholder="Address"
                value={user.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3 w-96">
              <label
                htmlFor="citizenship_image"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Citizenship Image
              </label>
              <input
                className="block w-full px-2 py-1 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="citizenship_image"
                type="file"
                onChange={(e) => handleCitizenshipImage(e.target.files)}
              />
            </div>
            <div className="mb-6 form-group">
              <label
                htmlFor="citizenship_number"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Citizenship Number
              </label>
              <input
                type="text"
                className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="citizenship_number"
                placeholder="Citizenship Number"
                value={user.citizenship_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full mb-3 xl:w-1/5 ">
              <select
                name="role"
                value={user.role}
                onChange={handleInputChange}
                className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
              >
                <option value="">Role</option>
                <option value="Vendor">Vendor</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
            <div className="mb-3 w-96">
              {/* <label
              htmlFor="formFileSm"
              className="inline-block mb-2 text-gray-700 form-label"
            >
              Small file input example
            </label> */}
              <input
                className="block w-full px-2 py-1 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="image"
                type="file"
                onChange={(e) => handleImage(e.target.files)}
              />
            </div>
            <button
              type="submit"
              className="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
