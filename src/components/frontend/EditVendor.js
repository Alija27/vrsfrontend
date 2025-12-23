import React from "react";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useParams } from "react-router-dom";

const EditVendor = () => {
  const { id } = useParams();
  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    getVendor();
    fetchUser();

    console.log(user);
    if (user && user.vendor) {
      console.log(user.vendor.id);
    }
  }, []);

  const [vendor, setVendor] = useState({});
  const getVendor = async () => {
    useAxios.get(`/vendorId/${id}`).then((res) => {
      setVendor(res.data);
    });
  };
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setVendor({ ...vendor, [e.target.name]: e.target.value });
    console.log(vendor);
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const [image, setImage] = useState(null);
  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("user_id", user.id);
    data.append("name", vendor.name);
    data.append("address", vendor.address);
    data.append("phone", vendor.phone);
    data.append("image", image);
    data.append("_method", "PUT");

    useAxios
      .post(`/vendor-edit/${id}`, data)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });
      })
      .catch((err) => {
        if (err.response.status === 422) {
          alert("");
        } else {
          Swal.fire({
            timer: 2000,
            icon: "error",
            title: err,
          });
        }
      });
  };
  return (
    <div>
      <div class="flex justify-center w-full p-6 rounded-lg  bg-white ">
        <div className="w-1/2 p-10 shadow-lg">
          <form onSubmit={submit}>
            <span className="flex justify-center text-2xl text-gray-900">
              Edit Vendor Profile
            </span>
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
                value={vendor.name}
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
                value={vendor.phone}
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
                value={vendor.address}
                onChange={handleInputChange}
              />
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

export default EditVendor;
