import { useEffect, useState, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";

function Vehicles() {
  const [user] = useContext(UserContext);
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(null);
  const [locations, setLocations] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form Data
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
        setLoading(false);
        setVehicles(res.data);
      })
      .catch((err) => {
        setLoading(false);
        alert("Cannot fetch vehicles");
      });
  }

  // Data Fetch
  useEffect(() => {
    useAxios
      .get("/availablevehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });

    useAxios
      .get("/types")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });

    useAxios
      .get("/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });
  }, []);

  return (
    <div>
      {/* SEARCH FORM */}
      <div
        className="flex items-center justify-center overflow-hidden text-center bg-center bg-no-repeat bg-cover h-96 p-50"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
        }}
      >
        <div
          className="z-50 w-full bg-fixed "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <div className="flex items-center justify-center h-full py-4 mx-10 bg-white rounded-full ">
              <div
                className="w-full gap-2 mx-8 rounded-full xl:flex my-15"
                style={{ height: "60px" }}
              >
                <div className="w-full mb-3 xl:w-1/5 ">
                  <select
                    onChange={(e) => setTypeId(e.target.value)}
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                  >
                    <option value="">Vehicle Type</option>
                    {types.map((type) => (
                      <option value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full mb-3 xl:w-1/5 ">
                  <select
                    onChange={(e) => setLocationId(e.target.value)}
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                  >
                    <option value="">Location</option>
                    {locations.map((location) => (
                      <option value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full mb-3 xl:w-1/5">
                  <input
                    type="datetime-local"
                    name=""
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    id=""
                  />
                </div>
                <div className="w-full mb-3 xl:w-1/5">
                  <input
                    type="datetime-local"
                    name=""
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    id=""
                  />
                </div>
                <div className="w-full py-2 xl:w-1/5">
                  <button className="w-full py-2 text-white bg-indigo-700 rounded-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* VEHICLE LIST */}
      <h3 className="w-3/12 p-2 pb-3 mx-auto mb-5 text-4xl font-bold text-center text-gray-500 border-b-4 border-indigo-400 rounded-md md:w-3/12 mt-11">
        Available Vehicles
      </h3>

      {loading && <div>Loading...</div>}

      {!loading && vehicles.length == 0 && (
        <div className="text-center">
          <p>No vehicles found!</p>
        </div>
      )}

      <div className="flex justify-center gap-6 mx-10 my-10">
        {/* {vehicles &&
          vehicles.map((item) => (
            <div className="bg-white rounded">
              <img
                src={`http://localhost:8000/storage/${item.image}`}
                class="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-3 text-lg font-bold">{item.name}</div>
              </div>
            </div>
          ))} */}
        {vehicles &&
          vehicles.map((item) => (
            <div class="rounded-lg  bg-white hover:scale-105 transition-transform duration-300 ">
              <Link to={`/vehicleDetails/${item.id}`}>
                <a>
                  <img
                    class="rounded-t-lg w-full object-cover  hover:overflow-hidden"
                    style={{ height: "270px", width: "400px" }}
                    src={`http://localhost:8000/storage/${item.image}`}
                    alt="img"
                  />
                </a>
                <div class="py-6 px-3 border-x-2 border-b-2 border-gray-400">
                  <div className="flex flex-row justify-between">
                    <p class="text-gray-900 text-xl font-medium mb-2">
                      {item.name}{" "}
                    </p>
                    <p class="text-gray-700 text-base mb-4">
                      Rs. {item.rental_price}/day
                    </p>
                  </div>

                  {/* <Link
                  to="/"
                  class=" inline-block px-6 py-2.5 bg-blue-600 mx-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Book
                </Link> */}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vehicles;
