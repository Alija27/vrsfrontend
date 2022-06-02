import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import p from "./p.mp4";
import s from "./sa.mp4";

const Home = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [frequentlyusedvehicles, setFrequentlyusedvehicles] = useState([]);
  useEffect(
    () => {
      setLoading(true);
      useAxios
        .get("/types")
        .then((res) => {
          setTypes(res.data);
          setLoading(false);
        })
        .catch((err) => {
          /*  Swal.fire({
            icon: "error",
            title: "Cannot fetch Vehicle types",
          }); */
        });
    },
    useAxios
      .get("/frequentlyusedvehicles")
      .then((res) => {
        setFrequentlyusedvehicles(res.data);
      })
      .catch((err) => {
        /*  Swal.fire({
          icon: "error",
          title: "Cannot fetch Vehicle",
        }); */
      }),
    []
  );

  return (
    <>
      <div>
        {/* <header className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                    Best Place To Choose Your Clothes
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro beatae error laborum ab amet sunt recusandae?
                    Reiciendis natus perspiciatis optio.
                  </p>
                  <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full h-full lg:max-w-2xl"
                  src="https://storyset.com/illustration/car-finance/cuate"
                  alt="Catalogue-pana.svg"
                />
              </div>
            </div>
          </div>
        </header>

        <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-1">
          <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>
            <img
              class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
          </div>
          <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
              <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Everything you
                <br class="hidden md:block" />
                can imagine
                <span class="inline-block text-deep-purple-accent-400">
                  is real
                </span>
              </h2>
              <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <div class="flex items-center">
                <a
                  href="/"
                  class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
                <a
                  href="/"
                  aria-label=""
                  class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div
          className="relative h-screen p-12 overflow-hidden text-center bg-no-repeat bg-cover "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
          }}
        ></div> */}
        <div
          className="relative object-center overflow-hidden bg-cover "
          /* style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
            height: 610,
          }} */
        >
          <div>
            <video loop autoPlay muted>
              <source src={p} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 w-full overflow-hidden "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-0 mb-6 text-4xl font-bold lg:text-5xl md:text-5xl">
                  Let your vehicle work while you work
                </h1>
                <h3 className="mb-8 text-2xl font-semibold text-gray-300 lg:text-3xl">
                  The best place for your dream vehicle.
                </h3>
                <Link
                  to="/vehicles"
                  className="inline-block px-6 py-2.5 border-2 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-600   transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <section>
          <div
            className="relative mt-5 overflow-hidden text-center bg-fixed bg-center bg-no-repeat bg-cover h-60 p-50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
            }}
          >
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                  <h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font ">
                    Find a car
                  </h1>
                  <Link
                    to="/vehicles"
                    class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  >
                    Browse Car
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section> */}
        <div>
          <h1 className="justify-center w-1/2 pb-4 mx-auto my-10 text-2xl font-bold text-center border-b-4 border-indigo-600 md:text-4xl md:w-1/3 mt-15 ">
            Vehicle Types
          </h1>
          {/* <h1 className="flex w-3/12 p-2 pb-3 mx-auto mb-5 text-4xl font-bold text-center border-indigo-400 rounded-md border-b-4e mt-11">
            Vehicle Types
          </h1> */}
          {loading ? (
            <div className="h-full row justify-content-center">
              <div class="flex justify-center items-center ">
                <div class="flex justify-center items-center"></div>
                <div
                  class="spinner-border animate-spin inline-block w-24 h-24 border-4  rounded-full"
                  role="status"
                ></div>
              </div>
            </div>
          ) : (
            <section className="flex flex-wrap justify-center gap-3 my-5 mt-8 space-y-4">
              {types.map((type) => (
                <div className="w-[350px] h-[300px] rounded shadow-xl mx-5">
                  <div>
                    <img
                      className="w-full h-[250px] border-b-2"
                      src={`http://localhost:8000/storage/${type.image}`}
                      alt="avatar"
                    />
                    <div class="flex flex-wrap justify-center px-2 py-4">
                      <Link
                        to={`/showbytype/${type.id}`}
                        class="font-bold text-xl mb-2"
                      >
                        {type.name}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                className="object-cover w-full h-56"
                src="https://images.pexels.com/photos/6011503/pexels-photo-6011503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <div className="py-5 text-center">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  Scooter
                </a>
              </div>
            </div>
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                className="object-cover w-full h-56"
                src="https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <div className="py-5 text-center">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  Bike
                </a>
              </div>
            </div>

            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                className="object-cover w-full h-56"
                src="https://images.pexels.com/photos/5093029/pexels-photo-5093029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <div className="py-5 text-center">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  Van
                </a>
              </div>
            </div>
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                className="object-cover w-full h-56"
                src="https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <div className="py-5 text-center">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  Bus
                </a>
              </div>
            </div>
            */}
            </section>
          )}
        </div>
        <div>
          <h1 className="justify-center w-1/2 pb-4 mx-auto my-10 text-2xl font-bold text-center border-b-4 border-indigo-600 md:text-4xl md:w-1/3 mt-15 ">
            Frequently Used Vehicles
          </h1>
          {/* <h1 className="flex w-3/12 p-2 pb-3 mx-auto mb-5 text-4xl font-bold text-center border-indigo-400 rounded-md border-b-4e mt-11">
            Vehicle Types
          </h1> */}
          {loading ? (
            <div className="h-full row justify-content-center">
              <div class="flex justify-center items-center ">
                <div class="flex justify-center items-center"></div>
                <div
                  class="spinner-border animate-spin inline-block w-24 h-24 border-4  rounded-full text-black"
                  role="status"
                ></div>
              </div>
            </div>
          ) : (
            <section className="flex flex-wrap justify-center gap-3 my-5 mt-8 space-y-4">
              {frequentlyusedvehicles.map((as) => (
                <Link to={`/vehicleDetails/${as.vehicle.id}`}>
                  <div className="w-[350px] h-[300px] rounded shadow-xl mx-5">
                    <div>
                      <img
                        className="w-full h-[250px] border-b-2"
                        src={`http://localhost:8000/storage/${as.vehicle.image}`}
                        alt="avatar"
                      />
                      <div class="flex flex-wrap justify-center px-2 py-4">
                        <span class="font-bold text-xl mb-2">
                          {as.vehicle.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-5"></div>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-8 mx-auto">
            <h1 className="mx-auto text-2xl font-bold text-center text-gray-500 lg:w-7/12 mt-11 mb-11 lg:text-4xl ">
              How Sharing Your Vehicle Works
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="lg:w-2/5 md:w-full md:pr-10 md:py-6">
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    1
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      List your car for free
                    </h2>
                    <p className="leading-relaxed">
                      Share your truck, sports car, or anything in between.
                      Listing takes about 10 minutes and is free — no sign-up
                      charges, no monthly fees.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    2
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      Set your price & rules
                    </h2>
                    <p className="leading-relaxed">
                      Lay your own ground rules and customize when your car is
                      available. Set your own daily price.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    3
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      Welcome your guests
                    </h2>
                    <p className="leading-relaxed">
                      When a guest books your car, you’ll confirm where and how
                      to hand over the keys before the trip. Check your guest in
                      with the app, then sit back and relax until the trip is
                      over.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    4
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      Sit back & earn
                    </h2>
                    <p className="leading-relaxed">
                      Get paid via direct deposit within three days after each
                      trip. You'll also get reimbursed for things like fuel and
                      any mileage beyond your limit.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                alt="step"
                style={{ height: "600px", width: "600px" }}
              />
            </div>
          </div>
        </section>

        <section>
          <div
            className="relative overflow-hidden text-center bg-fixed bg-center bg-no-repeat bg-cover h-70 p-50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
            }}
          >
            <section class="text-gray-200 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-center mx-auto">
                  <h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font ">
                    Be a vendor <br></br>&<br></br>List your vehicle today
                  </h1>
                  <Link
                    to="/vendor-register"
                    class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  >
                    Register Here
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <section className="text-gray-600 body-font">
            <div className="container flex flex-wrap justify-center px-5 py-6 mx-auto">
              <h1 className="w-6/12 p-2 mx-auto text-xl font-bold text-center text-gray-600 md:text-3xl lg:text-5xl mb-11">
                How VRS Works
              </h1>

              {/* <div className="flex flex-wrap justify-center w-full">
                <img
                  className="object-cover object-center mb-16 rounded-lg mr-11 lg:w-3/5 md:w-1/2 md:mt-0"
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                  alt="step"
                  style={{ height: "400px", width: "600px" }}
                />
 */}
              {/*  <video loop autoPlay muted>
                  <source src={key} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              <div className="flex flex-col justify-center gap-5 px-5 py-5 mx-5 my-5 lg:flex-row md:flex-row">
                <div className="w-full bg-white h-96">
                  <div className="h-full">
                    <video loop autoPlay muted>
                      <source src={s} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="w-full mx-5 bg-white">
                  <div className="">
                    <div className="relative flex pb-12">
                      <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                        <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                        1
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          Find the Perfect Vehicle
                        </h2>
                        <p className="leading-relaxed">
                          Enter a location and date and browse thousands of cars
                          shared by local hosts
                        </p>
                      </div>
                    </div>
                    <div className="relative flex pb-12">
                      <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                        <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                        2
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          Book your trip
                        </h2>
                        <p className="leading-relaxed">
                          Book on the VRS online, choose a protection plan.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex pb-12">
                      <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                        <div className="w-1 h-full bg-gray-200 pointer-events-none" />
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                        3
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                          Hit the road
                        </h2>
                        <p className="leading-relaxed">
                          Have the vehicle delivered or pick it up from your
                          host. Check in with the app, grab the keys, and hit
                          the road!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <motion.div className="carousel">
            <motion.div className="coursel-two"></motion.div>
          </motion.div>
        </div>
        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font ">
                Be a Vendor
              </h1>
              <Link
                to="/vendor-register"
                class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
              >
                Register as a Vendor
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
