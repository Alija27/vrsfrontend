import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../../UserContext";
import { VendorDashboard } from "./VendorDashboard";

const AddVehicle = () => {
  const [user, fetchUser] = useContext(UserContext);
  useEffect(() => {
    fetchUser();
  }, []);

  const [vehicleData, setvehicleData] = useState({
    name: "",
    vendor_id: "",
    type_id: "",
    model: "",
    brand: "",
    color: "",
    total_seats: "",
    rental_price: "",
    description: "",
    terms: "",

    condition: "",

    has_driver: "",
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
  }, []);
  const submitvehicleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", vehicleData.name);
    data.append("vendor_id", user.vendor.id);
    data.append("type_id", vehicleData.type_id);
    data.append("model", vehicleData.model);
    data.append("brand", vehicleData.brand);
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
    /* data.append("is_approved", vehicleData.is_approved); */
    useAxios
      .post("/addvehicle", data)

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
      <VendorDashboard />
      <div>
        <div
          className="relative overflow-hidden text-center bg-center bg-no-repeat bg-cover h-96 p-50"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
          }}
        ></div>
      </div>
      <div class="w-full max-w-sm p-6 m-20 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800 ">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
          Add Vehicle
        </h1>
        <div>
          <h1>Hello, {user && user.vendor && user.vendor.name}</h1>

          <form onSubmit={submitvehicleData}>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40zblock focus:ring-opacity-40"
                name="name"
                placeholder="Vehicle Name"
                value={vehicleData.name}
                onChange={handleInputChange}
              />
              {validation.name ? (
                <div className="text-red-500">{validation.name} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <input
                type="hidden"
                className="form-control"
                name="vendor_id"
                value={user.vendor && user.vendor.id}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Type
              </label>

              <select
                name="type_id"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40zblock focus:ring-opacity-40"
                onChange={handleInputChange}
                value={vehicleData.type_id}
              >
                <option value="">Vehicle Type</option>
                {types.map((type, index) => (
                  <option value={type.id}>{type.name}</option>
                ))}
              </select>
              {validation.type_id ? (
                <div className="text-red-500">{validation.type_id} </div>
              ) : (
                ""
              )}
            </div>

            <div clasName="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Location
              </label>
              <select
                name="location_id"
                className="items-center block w-full px-3 m-0 rounded-md"
                onChange={handleInputChange}
                value={vehicleData.location_id}
              >
                <option value="">Location</option>
                {locations.map((location) => (
                  <option value={location.id}>{location.name}</option>
                ))}
              </select>
              {validation.location_id ? (
                <div className="text-red-500">{validation.location_id} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Model
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="model"
                placeholder="Model"
                value={vehicleData.model}
                onChange={handleInputChange}
              />
              {validation.model ? (
                <div className="text-red-500">{validation.model} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Color
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="color"
                placeholder="Color"
                value={vehicleData.color}
                onChange={handleInputChange}
              />
              {validation.color ? (
                <div className="text-red-500">{validation.color} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Total Seats
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="total_seats"
                placeholder="Total Seats"
                value={vehicleData.total_seats}
                onChange={handleInputChange}
              />
              {validation.total_seats ? (
                <div className="text-red-500">{validation.total_seats} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Brand
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="brand"
                placeholder="Brand"
                value={vehicleData.brand}
                onChange={handleInputChange}
              />
              {validation.brand ? (
                <div className="text-red-500">{validation.brand} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Rental Price
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="rental_price"
                placeholder="Rental Price"
                value={vehicleData.rental_price}
                onChange={handleInputChange}
              />
              {validation.rental_price ? (
                <div className="text-red-500">{validation.rental_price} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40zblock focus:ring-opacity-40"
                name="description"
                rows={3}
                placeholder="Description"
                value={vehicleData.description}
                onChange={handleInputChange}
              />
              {validation.description ? (
                <div className="text-red-500">{validation.description} </div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Terms
              </label>
              <input
                name="terms"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Terms"
                value={vehicleData.terms}
                onChange={handleInputChange}
              />
              {validation.terms ? (
                <div className="text-red-500">{validation.terms} </div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Vehicle Image
              </label>
              {/* <label
              htmlFor="formFileSm"
              className="inline-block mb-2 text-gray-700 form-label"
            >
              Small file input example
            </label> */}
              <input
                onChange={(e) => handleImage(e.target.files)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40zblock focus:ring-opacity-40"
                name="image"
                type="file"
              />
              {validation.image ? (
                <div className="text-red-500">{validation.image} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Condition
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="condition"
                placeholder="Condition"
                value={vehicleData.condition}
                onChange={handleInputChange}
              />
              {validation.condition ? (
                <div className="text-red-500">{validation.condition} </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="formFileSm"
                className="inline-block text-gray-700 form-label"
              >
                Has Driver
              </label>
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="has_driver"
                value={vehicleData.has_driver}
                onChange={handleInputChange}
              />

              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="has_driver"
                placeholder="Has Driver"
                value={vehicleData.has_driver}
                onChange={handleInputChange}
              />
              {validation.has_driver ? (
                <div className="text-red-500">{validation.has_driver} </div>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="mt-4 
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

export default AddVehicle;
