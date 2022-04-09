import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../../UserContext";

export const Navbar = () => {
  const [user, fetchUser] = useContext(UserContext);
  return (
    <div>
      <nav className=" bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded  dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="#" className="flex items-center">
            <img
              src="Frame1.png"
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              VRS
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="Frame1.png"
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Name
                </span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-end justify-between hidden float-right w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicles"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Vehicles
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Register
                </Link>
              </li>

              {/*  {user && user.vendor && (
                <li>
                  <Link
                    to="/vendordashboard"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Vendor Dashboard
                  </Link>
                </li>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
      <header class="text-gray-600 body-font shadow-lg">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="w-8 h-8 rounded-full"
              src="Frame1.png"
              alt="user photo"
            />
            <span class="ml-3 text-xl">VRS</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" class="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link to="/vehicles" class="mr-5 hover:text-gray-900">
              Vehicles
            </Link>
            <Link to="/" class="mr-5 hover:text-gray-900">
              Fourth Link
            </Link>
            {user.role && user.role === "Vendor" && (
              <Link to="/vendordashboard" className="mr-5 hover:text-gray-900">
                Vendor Dashboard
              </Link>
            )}
          </nav>
          {!user.role && (
            <Link
              to="/login"
              class="inline-flex items-center text-white bg-indigo-500
            border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded
            text-base mt-4 md:mt-0"
            >
              Login
            </Link>
          )}
          {user.role && (
            <Link
              to="/logout"
              class="inline-flex items-center text-white bg-indigo-500
            border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded
            text-base mt-4 md:mt-0"
            >
              Logout
            </Link>
          )}
        </div>
      </header>
      {/* <header className="text-white bg-indigo-500">
        <div className="container flex flex-wrap items-center p-2 mx-auto">
          <a
            to="/"
            className="flex items-center font-medium text-white title-font "
          >
            <span className="items-center ml-3 text-xl">WorldNews</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center md:ml-auto">
            <a
              to="/"
              className="mr-5 rounded hover:border-b-4 hover:border-white"
            >
              Home
            </a>
            <a
              to="/"
              className="mr-5 rounded hover:border-b-4 hover:border-white"
            >
              About
            </a>
          </nav>
          <span className="cursor-pointer lg:hidden md:hidden hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
      </header> */}
    </div>
  );
};
