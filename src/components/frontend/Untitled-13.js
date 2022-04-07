import { FaStar } from "react-icons/fa";
import React from "react";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const ViewVehicle = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [vehicle, setVehicle] = useState({
    vendor: {},
    location: {},
    type: {},
  });
  const [eligibleForReview, setEligibleForReview] = useState(false);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [types, setTypes] = useState({});
  const [locations, setLocations] = useState({});
  const [book_data, setBookData] = useState({});
  const [user, fetchUser] = useContext(UserContext);
  const [requestVehicle, setRequestVehicle] = useState({
    user_id: user.id,
    vehicle_id: vehicle.id,
    destination: "",
    start_date: "",
    end_date: "",
    total_amount: "",
    remarks: "",
  });
  function submitBook() {
    useAxios
      .post("/requestVehicle", {
        user_id: user.id,
        vehicle_id: vehicle.id,
        destination: requestVehicle.destination,
        start_date: start_date,
        end_date: end_date,
        total_amount: requestVehicle.total_amount,
        remarks: requestVehicle.remarks,
      })
      .then((res) => {
        setRequestVehicle(res.data);
        alert("Requested Sucessfully");
        navigate("/myBookings");
      })
      .catch((err) => {
        alert("Cannot send request");
      });
  }

  function submitForm() {
    setLoading(true);
    useAxios
      .post(`/checkvehicle/${id}`, { start_date, end_date })
      .then((res) => {
        setLoading(false);
        setBookData(res.data);
        setRequestVehicle({
          ...requestVehicle,
          total_amount: res.data.total_price,
        });
      })
      .catch((err) => {
        setLoading(false);
        alert("Cannot check vehicle status!");
      });
  }

  /* const rating = (pos, e) => {
    let star = e.target;
  };
 */
  const handleInput = (e) => {
    setRequestVehicle({
      ...requestVehicle,
      [e.target.name]: e.target.value,
    });
  };
  function Review() {
    useAxios.post(`/giveReview/`);
  }
  const getTypes = async () => {
    useAxios.get("http://localhost:8000/api/types").then((res) => {
      setTypes(res.data);
    });
  };

  const getLocations = async () => {
    useAxios.get("/locations").then((res) => {
      setLocations(res.data);
      console.log(res.data);
    });
  };

  const checkEligible = () => {
    useAxios.get(`/eligible/${id}`).then((res) => {
      if (res.data === 0) {
        setEligibleForReview(false);
      } else {
        setEligibleForReview(true);
      }
    });
  };

  const fetchVehicle = async () => {
    // await axios.get(`/vehicle/${id}`).then((res) => {
    //   setVehicle(res.data);
    // });
    await useAxios.get(`/vehicle/${id}`).then((res) => {
      setVehicle(res.data);
    });
    console.log(vehicle);
  };

  const saveReview = (e) => {
    e.preventDefault();
    useAxios
      .post(`/review/${id}`, {
        ...requestVehicle,
        stars: rating,
        vehicle_id: id,
        user_id: user.id,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchVehicle();
    fetchUser();
    getTypes();
    getLocations(); /* eslint-disable */
    checkEligible();
  }, []);
  return (
    <div>
      <div className="gap-8 mx-auto md:mx-10 lg:flex my-14">
        <div className="w-full p-20 bg-white md:w-1/2">
          <div className="w-full ">
            <img
              src={`http://localhost:8000/storage/${vehicle.image}`}
              className="w-full"
            />
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
              {vehicle.name}
            </h1>
            <p className="col-start-1 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              <p className="mt-1 text-lg text-gray-500">Description</p>{" "}
              {vehicle.description}
            </p>
            <p className="col-start-1 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              <p className="mt-1 text-lg text-gray-500">Terms</p>{" "}
              {vehicle.terms}
            </p>
            <p className="col-start-1 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              <p className="mt-1 text-lg text-gray-500">Vehicle Conditon</p>{" "}
              {vehicle.condition}
            </p>
            <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              <p className="mt-1 text-lg text-gray-500">Location</p>{" "}
              {vehicle.location.name}
            </p>
            <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              <p className="mt-1 text-lg text-gray-500">Rental Price</p>{" "}
              {vehicle.rental_price}
            </p>{" "}
            <br />
            Vendor Details
            <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                src={`http://localhost:8000/storage/${vehicle.vendor.image}`}
                className="w-1/3 bg-cover"
              />
              <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {vehicle.vendor.name}
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {vehicle.vendor.phone}
                </p>

                <div className="flex justify-between mt-3 item-center">
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {vehicle.vendor.address}
                  </p>
                  <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-20 bg-white lg:mt-10 md:w-1/2 ">
          <div className="p-5 border border-indigo-600 border-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  PickUp Date
                </label>
                <input
                  type="datetime-local"
                  name="start_date"
                  value={start_date}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="end_date"
                  className="text-sm leading-7 text-gray-600"
                >
                  End Date
                </label>
                <input
                  type="datetime-local"
                  name="end_date"
                  value={end_date}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <button className="w-full px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                Check Availability
              </button>
            </form>
            {isLoading && (
              <div>
                <p>Checking availability...</p>
              </div>
            )}

            {!isLoading && book_data.status && (
              <div>
                <p>{book_data.status}</p>
                {book_data.is_available && (
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        submitBook();
                      }}
                    >
                      <div className="relative mb-4">
                        <input
                          type="hidden"
                          name="start_date"
                          value={start_date}
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div className="relative mb-4">
                        <input
                          type="hidden"
                          name="end_date"
                          value={end_date}
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div className="relative mb-4">
                        Destination
                        <input
                          name="destination"
                          value={requestVehicle.destination}
                          onChange={handleInput}
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div className="relative mb-4">
                        Total Amount
                        <input
                          disabled
                          name="total_amount"
                          value={requestVehicle.total_amount}
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                      <div className="relative mb-4">
                        Remarks
                        <input
                          name="remarks"
                          value={requestVehicle.remarks}
                          onChange={handleInput}
                          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>

                      <button className="w-full px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indio-600">
                        Request Vehicle
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div classname="flex justify-start">
        <span className="fa fa-star" />
        <span className="fa fa-star " />
        <span className="fa fa-star " />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </div>
      <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div
          className="w-1/3 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Backpack
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
          <div className="flex mt-2 item-center">
            <span className="fa fa-star" />
            <span className="fa fa-star " />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
              $220
            </h1>
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              Comment
            </button>
          </div>
        </div>
      </div> */}
      {/* arko custome rbata hnna id 3 bahek */}
      {eligibleForReview && (
        <section className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-lg dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-100 capitalize dark:text-white">
            Review
          </h2>
          <form onSubmit={saveReview}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-100 dark:text-gray-200"
                  htmlFor="rating"
                >
                  Rate
                </label>

                <div
                  name="stars"
                  className="flex flex-row w-full px-4 py-2 mt-2 text-gray-100 rounded-md app dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label>
                        <input
                          type="radio"
                          name="stars"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                          className="star"
                          color={
                            ratingValue <= (hover || rating)
                              ? "yellow"
                              : "white"
                          }
                          size={70}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <div>
                <label
                  className="text-gray-100 dark:text-gray-200"
                  htmlFor="comment"
                >
                  Comment
                </label>
                <textarea
                  name="message"
                  onChange={handleInput}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={saveReview}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};
