import { useState, useEffect } from "react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    fetchUser();

    console.log(user);
    console.log(user.vendor.id);
  }, []);

  return (
    <div className="items-center">
      {/* <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
          <div className="pr-0 lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0">
            Image
            <div>
              <img
                src={`http://localhost:8000/storage/${user.image}`}
                alt="image"
              />
            </div>
          </div>
          <div className="flex flex-col w-full p-5 mt-10 bg-gray-100 rounded-lg lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0">
            <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
              User Profile
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Name
              </label>
              <input
                disabled
                type="text"
                id="name"
                name="name"
                value={user.name}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                disabled
                type="email"
                id="email"
                name="email"
                value={user.email}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Address
              </label>
              <input
                disabled
                type="text"
                id="address"
                name="address"
                value={user.address}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Phone
              </label>
              <input
                disabled
                type="text"
                id="name"
                name="name"
                value={user.phone}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Citizenship Number
              </label>
              <input
                disabled
                type="email"
                id="email"
                name="email"
                value={user.citizenship_number}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Role
              </label>
              <input
                disabled
                type="email"
                id="email"
                name="email"
                value={user.role}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Citizenship Image
              </label>
              <img
                src={`http://localhost:8000/storage/${user.citizenship_image}`}
                alt="citizen"
                height="500px"
                width="500px"
              />
            </div>
          </div>
        </div>
      </section> */}

      <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 ">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div
            className="items-center flex-grow hidden bg-white lg:flex lg:bg-transparent lg:shadow-none"
            id="example-collapse-navbar"
          ></div>
        </div>
      </nav>
      <main className="profile-page">
        <section className="relative block" style={{ height: 500 }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            /*  style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }} */
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-50"
            />
          </div>
        </section>
        <section className="relative py-16 bg-indigo-300">
          <div className="container w-full px-4 mx-auto md:w-7/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      <img
                        alt="image"
                        src={`http://localhost:8000/storage/${user.image}`}
                        className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                        style={{ maxWidth: 200, maxHeight: 200 }}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                    {/* <div className="px-3 py-6 mt-32 sm:mt-0">
                      <Link
                        to={`/edit-vendor/${user.vendor.id}`}
                        className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none sm:mr-2"
                      >
                        Edit
                      </Link>
                    </div> */}
                  </div>
                  <div className="w-full px-4 lg:w-4/12 lg:order-1">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      {/* <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Vehicles</span>
                      </div> */}
                      {/*  <div className="p-3 mr-4 text-center">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span>
                      </div>
                      <div className="p-3 text-center lg:mr-4">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="mt-40 text-center">
                  <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                    {user.name}
                  </h3>
                  <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                    <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt" />
                    {user.address}
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-phone" />
                    {user.phone}
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-message" />
                    {user.email}
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas " />
                    Citizenship Number:{user.citizenship_number}
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas " />
                    {user.role}
                  </div>
                  <div className="mt-10 mb-2 text-gray-700">
                    <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                      22
                    </span>
                    <span className="text-sm text-gray-500">Vehicles</span>
                  </div>

                  {/* <div className="mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-university" />
                    University of Computer Science
                  </div> */}
                </div>
                <div className="py-10 mt-10 text-center border-t border-gray-300">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        <label
                          htmlFor="email"
                          className="text-sm leading-7 text-gray-600"
                        >
                          Citizenship Image
                        </label>
                        <img
                          src={`http://localhost:8000/storage/${user.citizenship_image}`}
                          alt="citizen"
                          height="500px"
                          width="500px"
                        />
                      </p>
                      {/*  <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a> */}
                      <div className="mt-10 mb-2 text-gray-700">
                        <Link
                          to={`/edit-profile/${user.id}`}
                          className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none sm:mr-2"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
