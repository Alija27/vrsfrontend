import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const ShowByType = () => {
  let { id } = useParams();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    useAxios
      .get(`/showbytype/${id}`)
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Cannot fetch Vehicle ",
        });
      });
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-full row justify-content-center">
          <div class="flex justify-center items-center ">
            <div class="flex justify-center items-center">
              <div
                class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div
              class="spinner-border animate-spin inline-block w-10 h-10 border-4  rounded-full"
              role="status"
            ></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 m-10">
          {vehicles &&
            vehicles.map((item) => (
              <div class="max-w-sm rounded overflow-hidden shadow-xl">
                <img
                  class="w-full border-b border-gray-200"
                  style={{ height: "270px", width: "350px" }}
                  src={`http://localhost:8000/storage/${item.image}`}
                  alt="Sunset in the mountains"
                />
                <div class="flex flex-wrap justify-between px-2 py-4">
                  <span class="font-bold text-xl mb-2">{item.name}</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Rs. {item.rental_price}/ per day
                  </span>
                  <span class="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <Link to={`/vehicleDetails/${item.id}`}>View</Link>
                  </span>
                </div>
              </div>
            ))}
          {!vehicles && <div>No vehicles in this type</div>}
        </div>
      )}
    </div>
  );
};

export default ShowByType;
