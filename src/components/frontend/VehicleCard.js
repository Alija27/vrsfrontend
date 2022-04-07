import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

function VehicleCard(props) {
  let registeredVehicle = props.vehicle;
  const [is_available, setIsAvailable] = useState(false);

  useEffect(() => {
    setIsAvailable(registeredVehicle.is_available);
  }, [registeredVehicle]);

  function toggleAvailable() {
    let new_is_available = !is_available;
    setIsAvailable(new_is_available);

    useAxios
      .post(`/vehiclestatus/${registeredVehicle.id}`, {
        is_available: new_is_available ? 1 : 0,
      })
      .then((res) => {
        setIsAvailable(res.data.is_available);
      })
      .catch((err) => {});
  }

  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src={`http://localhost:8000/storage/${registeredVehicle.image}`}
        style={{ height: "290px" }}
        alt="vehicle"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{registeredVehicle.name}</div>
        <p className="text-base text-gray-700">
          {registeredVehicle.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          <div className="flex justify-center">
            <div className="mx-5 form-check form-switch">
              <input
                className="float-left h-5 -ml-10 align-top bg-gray-300 bg-no-repeat bg-contain rounded-full shadow-sm appearance-none cursor-pointer form-check-input w-9 focus:outline-none"
                type="checkbox"
                role="switch"
                id="is_available"
                name="is_available"
                onChange={toggleAvailable}
                checked={is_available}
              />
              <label
                className="inline-block mx-5 text-gray-800 form-check-label"
                htmlFor="is_available"
              >
                Available
              </label>
            </div>
          </div>
        </span>
        <Link
          to={`/editvehicle/${registeredVehicle.id}`}
          class=" inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default VehicleCard;
