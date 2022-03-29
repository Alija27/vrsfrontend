import React from "react";

const BookVehiclePage = () => {
  return (
    <div>
      {/*       <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-start justify-center px-5 py-24 mx-auto">
          <img
            className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="w-full text-start lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Vehicle Name
            </h1>
            <p className="mb-8 leading-relaxed">{vehicle.description}</p>
            <p className="mb-8 leading-relaxed">Vehicle Description</p>
            <p className="mb-8 leading-relaxed">Vehicle Description</p>
            <p className="mb-8 leading-relaxed">Vehicle Description</p>
            <p className="mb-8 leading-relaxed">Vehicle Description</p>
            <p className="mb-8 leading-relaxed">Vehicle Description</p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section> */}

      <main className="px-4 py-6 sm:p-6 md:py-10 md:px-8">
        <div className="grid max-w-4xl grid-cols-1 mx-auto lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="grid col-start-1 col-end-3 row-start-1 gap-4 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <form>
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-first-name"
              >
                Pick Up Date
              </label>
              <input className="flex" type="datetime-local" />

              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-last-name"
              >
                End Date
              </label>
              <input className="flex" id="" type="datetime-local" />
              <button className="text-white bg-indigo-700 rounded-1">
                Book Vehicle if customer has uploaded file check here
              </button>
            </form>
          </div>
          <div className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <img
              src="/beach-house.jpg"
              alt
              className="object-cover w-full rounded-lg h-60 sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookVehiclePage;
