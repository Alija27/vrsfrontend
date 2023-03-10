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
import { useParams } from "react-router-dom";

export const EditProfile = () => {
  const { id } = useParams();
  const [user, fetchUser] = useContext(UserContext);

  const [userData, setUserData] = useState({
    // name: "",
    // email: "",
    // phone: "",
    // address: "",
    // password: "",
    // role: "",
    // citizenship_number: "",
  });
  const getUser = async () => {
    useAxios.get(`/userId/${id}`).then((res) => {
      setUserData(res.data);
    });
  };

  useEffect(() => {
    fetchUser();
    getUser();
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
    // data.append("_method", "PUT");
    await axios
      .put(`http://localhost:8000/api/updateProfile/${id}`, data, {
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
                value={userData.email}
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
                value={userData.phone}
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
                value={userData.address}
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
                value={userData.citizenship_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full mb-3 xl:w-1/5 ">
              <select
                name="role"
                value={userData.role}
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
