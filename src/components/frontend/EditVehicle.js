import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";

import UserContext from "../../UserContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const EditVehicle = () => {
  const { id } = useParams();
  const [user, fetchUser] = useContext(UserContext);

  const [vehicleData, setvehicleData] = useState({
    /*  name: "",
    vendor_id: "",
    type_id: "",
    model: "",
    color: "",
    total_seats: "",
    rental_price: "",
    description: "",
    terms: "",

    condition: "",

    has_driver: "", */
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setvehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    console.log(vehicleData);
  };

  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };

  const getVehicles = async () => {
    useAxios.get(`/registeredvehicles/${id}`).then((res) => {
      setvehicleData(res.data);
    });
  };

  const getTypes = async () => {
    useAxios.get("http://localhost:8000/api/types").then((res) => {
      setTypes(res.data);
    });
  };

  const getLocations = async () => {
    useAxios.get("/locations").then((res) => {
      setLocations(res.data);
    });
  };
  useEffect(() => {
    getLocations();

    getTypes();
    fetchUser();
    getVehicles();
  }, []);
  const submitvehicleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", vehicleData.name);
    data.append("vendor_id", user.vendor.id);
    data.append("type_id", vehicleData.type_id);
    data.append("model", vehicleData.model);
    data.append("color", vehicleData.color);
    data.append("total_seats", vehicleData.total_seats);
    data.append("rental_price", vehicleData.rental_price);
    data.append("description", vehicleData.description);
    data.append("terms", vehicleData.terms);
    data.append("image", image);
    data.append("condition", vehicleData.condition);
    data.append("location_id", vehicleData.location_id);
    /*  data.append("is_available", vehicleData.is_available); */
    data.append("has_driver", vehicleData.has_driver);
    data.append("_method", "PUT");
    /* data.append("is_approved", vehicleData.is_approved); */
    useAxios
      .post(`/updatevehicle/${id}`, data)

      .then((res) => {
        Swal.fire({
          timer: 2000,
          icon: "success",
          title: res.data.message,
        });

        navigate("/registeredvehicle");
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
      <div>
        <div
          className="relative overflow-hidden text-center bg-center bg-no-repeat bg-cover h-96 p-50"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
          }}
        ></div>
      </div>
      <div class="flex justify-center w-full p-6 rounded-lg  bg-white ">
        <div className="w-1/2 p-10 shadow-lg">
          <h1>Hello, {user && user.vendor && user.vendor.name}</h1>
          <form onSubmit={submitvehicleData}>
            <div className="mb-6 form-group">
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
                placeholder="Vehicle Name"
                value={vehicleData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="hidden"
                className="form-control"
                name="vendor_id"
                value={user.vendor && user.vendor.id}
              />
            </div>
            <select
              name="type_id"
              className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
              onChange={handleInputChange}
              value={vehicleData.type_id}
            >
              <option value="">Vehicle Type</option>
              {types.map((type, index) => (
                <option value={type.id}>{type.name}</option>
              ))}
            </select>
            <select
              name="location_id"
              className="items-center block w-full px-3 m-0"
              onChange={handleInputChange}
              value={vehicleData.location_id}
            >
              <option value="">Location</option>
              {locations.map((location) => (
                <option value={location.id}>{location.name}</option>
              ))}
            </select>
            <div className="mb-6 form-group">
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
                name="model"
                placeholder="Model"
                value={vehicleData.model}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
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
                name="color"
                placeholder="Color"
                value={vehicleData.color}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
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
                name="total_seats"
                placeholder="Total Seats"
                value={vehicleData.total_seats}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
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
                name="rental_price"
                placeholder="Rental Price"
                value={vehicleData.rental_price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
              <textarea
                className="
  form-control
  block
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
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
                name="description"
                rows={3}
                placeholder="Description"
                value={vehicleData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
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
                name="color"
                placeholder="Color"
                value={vehicleData.color}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
              <input
                name="terms"
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
                placeholder="Terms"
                value={vehicleData.terms}
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
                onChange={(e) => handleImage(e.target.files)}
                className="block w-full px-2 py-1 m-0 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="image"
                type="file"
              />
            </div>
            <div className="mb-6 form-group">
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
                name="condition"
                placeholder="Condition"
                value={vehicleData.condition}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 form-group">
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
                name="has_driver"
                placeholder="Has Driver"
                value={vehicleData.has_driver}
                onChange={handleInputChange}
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
