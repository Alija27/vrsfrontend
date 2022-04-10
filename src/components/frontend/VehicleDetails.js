import React from "react";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const VehicleDetails = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [vehicle, setVehicle] = useState({
    vendor: {},
    location: {},
    type: {},
  });
  const [reviews, setReview] = useState([]);
  const [eligibleForReview, setEligibleForReview] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [types, setTypes] = useState({});
  const [locations, setLocations] = useState({});
  const [book_data, setBookData] = useState({});
  const [user, fetchUser] = useContext(UserContext);
  const [message, setMessage] = useState("");
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
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {
        alert("Cannot send request");
      });
    setLoading(false);
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
    setLoading(false);
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

  const getTypes = async () => {
    setLoading(true);

    useAxios.get("http://localhost:8000/api/types").then((res) => {
      setTypes(res.data);
    });
    setLoading(false);
  };

  const getLocations = async () => {
    setLoading(true);

    useAxios.get("/locations").then((res) => {
      setLocations(res.data);
      console.log(res.data);
    });
    setLoading(false);
  };

  const checkEligible = () => {
    setLoading(true);

    useAxios.get(`/eligible/${id}`).then((res) => {
      if (res.data === 0) {
        setEligibleForReview(false);
      } else {
        setEligibleForReview(true);
      }
    });
    setLoading(false);
  };

  const fetchVehicle = async () => {
    setLoading(true);

    // await axios.get(`/vehicle/${id}`).then((res) => {
    //   setVehicle(res.data);
    // });
    await useAxios.get(`/vehicle/${id}`).then((res) => {
      setVehicle(res.data);
    });
    console.log(vehicle);
  };
  const getReview = async () => {
    await useAxios.get(`/review/${id}`).then((res) => {
      setReview(res.data);
    });
    console.log();
    setLoading(false);
  };

  const saveReview = (e) => {
    setLoading(true);

    e.preventDefault();
    useAxios
      .post(`/review/${id}`, {
        message: message,
        stars: rating,
        vehicle_id: id,
        user_id: user.id,
      })
      .then((res) => {
        alert(res.data);
        getReview();
        setMessage("");
        setRating(0);
      })
      .catch((err) => {
        alert(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getReview();
    fetchVehicle();
    fetchUser();
    getTypes();
    getLocations(); /* eslint-disable */
    checkEligible();
    setLoading(false);
  }, []);
  //
  return (
    <>
      {loading && <div>Loading......................................</div>}
      {!loading && (
        <>
          <div className="relative overflow-hidden text-center h-96 p-50">
            <img
              alt="Jeremy S."
              className="w-full h-96 object-fit"
              src={`http://localhost:8000/storage/${vehicle.image}`}
            />
          </div>

          <div className="gap-8 px-20 py-12 mx-auto md:mx-10 lg:flex ">
            <div className="w-full bg-white md:w-1/2">
              <div className="w-full ">
                <h1 className="text-3xl font-bold text-white sm:text-slate-900 dark:sm:text-white ">
                  {vehicle.name} Bentley Continental GT 2012
                </h1>
                <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                  <p className="mt-1 text-lg text-gray-500 ">
                    <i class="fa-solid fa-location-pin ml-1"></i>{" "}
                    {vehicle.location.name}
                  </p>
                </p>
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

                <br />
              </div>
            </div>
            <div className="bg-white md:w-1/2">
              <p className="col-start-1 mt-4 text-sm leading-6 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                <p className="mt-1 text-lg text-gray-500">Rental Price</p>
                <h2 className="mt-1 text-lg text-black text-bold">
                  Rs. {vehicle.rental_price}/day
                </h2>
              </p>
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
                {loading && (
                  <div>
                    <p>Checking availability...</p>
                  </div>
                )}

                {!loading && book_data.status && (
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
          <div>
            <div className="flex max-w-md mx-24 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                src={`http://localhost:8000/storage/${vehicle.vendor.image}`}
                className="w-1/3 bg-cover"
              />
              <div className="w-2/3 p-4 md:p-4">
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Hosted By:
                </p>
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
            <div>
              <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 w-8/12 mx-24">
                  Reviews
                  {reviews.map((item) => (
                    <div class="divide-y-2 divide-gray-100">
                      <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="flex gap-5 border-b border-gray-500 pb-8">
                          <div class="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <img
                              className="inline-block rounded-full w-11 ring-2 ring-white"
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt
                            />
                          </div>
                          <div>
                            <h2 class=" flex text-2xl font-medium text-gray-900 title-font mb-2">
                              <FaStar color={item.stars >= 1 ? "yellow" : ""} />

                              <FaStar color={item.stars >= 2 ? "yellow" : ""} />
                              <FaStar color={item.stars >= 3 ? "yellow" : ""} />
                              <FaStar color={item.stars >= 4 ? "yellow" : ""} />
                              <FaStar color={item.stars >= 5 ? "yellow" : ""} />
                              {/*  */}
                            </h2>
                            <span class="mt-1 text-gray-500 text-sm">
                              {item.user.name}, {item.created_at}
                            </span>
                            <p class="leading-relaxed">{item.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                Reviews
                {reviews.map((item) => (
                  <div class="px-10">
                    <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                      <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                        LOGO
                      </div>
                      <div class="mt-4">
                        <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                          Product Review
                        </h1>
                        <div class="flex mt-2">
                          <FaStar color={item.stars >= 1 ? "yellow" : ""} />

                          <FaStar color={item.stars >= 2 ? "yellow" : ""} />
                          <FaStar color={item.stars >= 3 ? "yellow" : ""} />
                          <FaStar color={item.stars >= 4 ? "yellow" : ""} />
                          <FaStar color={item.stars >= 5 ? "yellow" : ""} />
                        </div>
                        <p class="mt-4 text-md text-gray-600">{item.message}</p>
                        <div class="flex justify-between items-center">
                          <div class="mt-4 flex items-center space-x-4 py-6">
                            <div class="">
                              <img
                                className="inline-block w-12 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt
                              />
                            </div>
                            <div class="text-sm font-semibold">
                              {item.user.name}
                              <span class="font-normal">
                                {" "}
                                {item.created_at}
                              </span>
                            </div>
                          </div>
                          <div class="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
        </>
      )}
    </>
  );
};
export default VehicleDetails;
