import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="relative h-screen p-12 overflow-hidden text-center bg-no-repeat bg-cover"
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
                    to="/vendor"
                    class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
