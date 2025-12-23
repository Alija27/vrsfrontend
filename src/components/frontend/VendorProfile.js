import { useState, useEffect } from "react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import UserContext from "../../UserContext";
import React from "react";
import { Link } from "react-router-dom";

export const VendorProfile = () => {
  const [user, fetchUser] = useContext(UserContext);

  useEffect(() => {
    fetchUser();
    console.log(user);
    if (user && user.vendor) {
      console.log(user.vendor.id);
    }
  }, []);

  return (
    <div className="items-center">
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
            <div className="relative flex flex-col w-full h-[600px] min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                    <div className="relative">
                      {user && user.vendor && user.vendor.image && (
                        <img
                          alt="image"
                          src={`http://localhost:8000/storage/${user.vendor.image}`}
                          className="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16"
                          style={{ maxWidth: 200, maxHeight: 200 }}
                        />
                      )}
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
                  {user && user.vendor ? (
                    <>
                      <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                        {user.vendor.name}
                      </h3>
                      <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                        <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt" />
                        {user.vendor.address}
                      </div>
                      <div className="mt-10 mb-2 text-gray-700">
                        <i className="mr-2 text-lg text-gray-500 fas fa-phone" />
                        {user.vendor.phone}
                      </div>
                      <div className="mt-10 mb-2 text-gray-700">
                        <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Vehicles</span>
                      </div>
                      <div className="mt-10 mb-2 text-gray-700">
                        <Link
                          to={`/edit-vendor/${user.vendor.id}`}
                          className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none sm:mr-2"
                        >
                          Edit
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-600">No vendor profile found</p>
                  )}
                  {/* <div className="mb-2 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 fas fa-university" />
                    University of Computer Science
                  </div> */}
                </div>
                {/* <div className="py-10 mt-10 text-center border-t border-gray-300">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  <footer class="relative bg-gray-300 pt-8 pb-6">
<div
  class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style="height: 80px;"
>
  <svg
    class="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      class="text-gray-300 fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>
<div class="container mx-auto px-4">
  <div class="flex flex-wrap">
    <div class="w-full lg:w-6/12 px-4">
      <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
      <h5 class="text-lg mt-0 mb-2 text-gray-700">
        Find us on any of these platforms, we respond 1-2 business days.
      </h5>
      <div class="mt-6">
        <button
          class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i class="flex fab fa-twitter"></i></button
        ><button
          class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i class="flex fab fa-facebook-square"></i></button
        ><button
          class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i class="flex fab fa-dribbble"></i></button
        ><button
          class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i class="flex fab fa-github"></i>
        </button>
      </div>
    </div>
    <div class="w-full lg:w-6/12 px-4">
      <div class="flex flex-wrap items-top mb-6">
        <div class="w-full lg:w-4/12 px-4 ml-auto">
          <span
            class="block uppercase text-gray-600 text-sm font-semibold mb-2"
            >Useful Links</span
          >
          <ul class="list-unstyled">
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://www.creative-tim.com/presentation"
                >About Us</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://blog.creative-tim.com"
                >Blog</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://www.github.com/creativetimofficial"
                >Github</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://www.creative-tim.com/bootstrap-themes/free"
                >Free Products</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <span
            class="block uppercase text-gray-600 text-sm font-semibold mb-2"
            >Other Resources</span
          >
          <ul class="list-unstyled">
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                >MIT License</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://creative-tim.com/terms"
                >Terms &amp; Conditions</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://creative-tim.com/privacy"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a
                class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                href="https://creative-tim.com/contact-us"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-400" />
  <div
    class="flex flex-wrap items-center md:justify-between justify-center"
  >
    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
      <div class="text-sm text-gray-600 font-semibold py-1">
        Copyright © 2019 Tailwind Starter Kit by
        <a
          href="https://www.creative-tim.com"
          class="text-gray-600 hover:text-gray-900"
          >Creative Tim</a
        >.
      </div>
    </div>
  </div>
</div>
    </footer> */}
    </div>
  );
};
