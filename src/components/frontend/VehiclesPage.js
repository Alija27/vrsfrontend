import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";
import VendorRegister from "./VendorRegister";

const VehiclesPage = () => {
  const [user] = useContext(UserContext);
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(null);
  const [locations, setLocations] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [type, setType] = useState("");
  const [location_id, setLocationId] = useState("");

  function submitForm() {
    setLoading(true);
    useAxios
      .post("/vehicles", {
        type_id: typeId,
        location_id: location_id,
      })
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        setLoading(false);
        /* Swal.fire({
          icon: "error",
          title: "Cannot fetch Vehicle",
        }); */
      });
    setLoading(false);
  }

  // Data Fetch

  useEffect(() => {
    useAxios

      .get("/availablevehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        /* Swal.fire({
          icon: "error",
          title: "Cannot fetch Vehicle ",
        }); */
      });

    useAxios
      .get("/types")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        /*  Swal.fire({
          icon: "error",
          title: "Cannot fetch Vehicle types",
        }); */
      });

    useAxios
      .get("/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        /* Swal.fire({
          icon: "error",
          title: "Cannot fetch locations",
        }); */
      });
  }, []);

  return (
    <div>
      <div
        className="relative w-full bg-center bg-no-repeat bg-cover h-96"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <div className="flex justify-center space-around">
            <div className="absolute w-9/12 bg-white border-2 border-gray-100 rounded -bottom-56 lg:-bottom-16 md:-bottom-56 sm:-bottom-56">
              <div className="flex flex-col p-5 lg:flex-row ">
                <div className="w-full px-1">
                  <label>Vehicle Type</label> <br></br>
                  <select
                    onChange={(e) => setTypeId(e.target.value)}
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                  >
                    <option value="">Vehicle Type</option>
                    {types.map((type) => (
                      <option value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full px-1">
                  <label>Location</label>
                  <select
                    onChange={(e) => setLocationId(e.target.value)}
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                  >
                    <option value="">Location</option>
                    {locations.map((location) => (
                      <option value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>
                {/* <div className="w-full px-1">
                  <label>Start Date</label>
                  <input
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    type="date"
                  />
                </div>{" "}
                <div className="w-full px-1">
                  <label>End Date</label>
                  <input
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    type="date"
                  />
                </div> */}
                <div className="w-full px-2 py-2 mt-6 xl:w-1/5">
                  <button className="w-full px-2 py-2 text-white bg-indigo-700 rounded">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className="justify-center w-56 pb-4 mx-auto mt-64 text-5xl font-bold border-b-4 border-blue-800 lg:text-6xl md:mt-64 lg:mt-20">
          Vehicles
          <hr className=""></hr>
        </div>
        {loading && (
          <div className="text-4xl text-center text-indigo-500 text-bold">
            Loading...
          </div>
        )}

        {!loading && vehicles.length == 0 && (
          <div className="text-center">
            <p className="py-5 mx-40 mt-10 text-xl text-white bg-red-900 text-bold">
              No vehicles found according to your search!
            </p>
          </div>
        )}
        {!loading && (
          <div className="flex flex-wrap justify-center gap-10 m-10">
            {vehicles &&
              vehicles.map((item) => (
                <div class="max-w-sm rounded overflow-hidden shadow-xl">
                  <Link to={`/vehicleDetails/${item.id}`}>
                    <img
                      class="w-full border-b border-gray-200"
                      style={{ height: "270px", width: "350px" }}
                      src={`http://localhost:8000/storage/${item.image}`}
                      alt="Sunset in the mountains"
                    />
                    <div class="flex flex-wrap justify-between px-2 py-4">
                      <span class="font-bold text-xl mb-2">{item.name}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Rs. {item.rental_price}/day
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        )}
        {/*
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              style={{ height: "270px", width: "400px" }}
              src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img
              class="w-full border-b border-gray-200"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
              alt="Sunset in the mountains"
            />
            <div class="flex flex-wrap justify-between px-2 py-4">
              <span class="font-bold text-xl mb-2">Blue BMW</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rs. 2000/day
              </span>
            </div>
          </div> */}
        {/* <div class="relative card-container h-[230px] w-[300px]">
          <div className="absolute w-full h-full rounded shadow-xl card">
            <figure className="absolute w-full h-full bg-white front">
              <div>
                <img
                  class=" w-full border-b border-gray-200"
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-170811.jpg&fm=jpg"
                  alt="Sunset in the mountains"
                />
                <div class="flex flex-wrap justify-between px-2 py-4">
                  <span class="font-bold text-xl mb-2">Blue BMW</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Rs. 2000/day
                  </span>
                </div>
              </div>
            </figure>
            <figure className="absolute w-full h-full bg-white back">
              <div>Back</div>
            </figure>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VehiclesPage;
