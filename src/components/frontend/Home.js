import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        <div
          className="relative h-screen p-12 overflow-hidden text-center bg-no-repeat bg-cover "
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
          }}
        ></div>
        <section>
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
        </section>

        <div className="flex flex-wrap justify-center gap-4 mt-8"></div>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
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
              />
            </div>
          </div>
        </section>
        <section>
          <div
            className="relative overflow-hidden text-center bg-fixed bg-center bg-no-repeat bg-cover h-60 p-50"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
            }}
          >
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                  <h1 class="flex-grow sm:pr-16 text-4xl font-medium title-font ">
                    List your car today
                  </h1>
                  <Link
                    to="/addvehicle"
                    class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="text-gray-600 body-font">
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
        </section>
      </div>
    </>
  );
};

export default Home;
