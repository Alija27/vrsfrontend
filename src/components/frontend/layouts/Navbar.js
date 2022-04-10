import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../../../UserContext";

export const Navbar = () => {
  const [user, fetchUser] = useContext(UserContext);
  return (
    <div>
      <header class="text-gray-600 body-font shadow-lg">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-500 mb-4 md:mb-0">
            <img
              className="w-8 h-8 rounded-full"
              src="Frame1.png"
              alt="user photo"
            />
            <span class="ml-3 text-xl">VRS</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              class="mr-5  hover:text-indigo-500 font-medium  hover:border-b-2 hover:border-indigo-400 "
            >
              Home
            </Link>
            <Link
              to="/about"
              class="mr-5 hover:text-indigo-500 font-medium  hover:border-b-2 hover:border-indigo-400"
            >
              About
            </Link>
            <Link
              to="/vehicles"
              class="mr-5 hover:text-indigo-500 font-medium  hover:border-b-2 hover:border-indigo-400"
            >
              Vehicles
            </Link>
            {user && user.role && (
              <>
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  class="inline-flex items-center text-white bg-indigo-500
              border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded
              text-base mt-4 md:mt-0"
                  type="button"
                >
                  {user && user.name}
                </button>
                <div
                  id="dropdownDivider"
                  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      {user && user.role === "Vendor" && user.vendor && (
                        <Link
                          to="/vendordashboard"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Vendor Dashboard
                        </Link>
                      )}
                    </li>
                    <li>
                      {user && user.role === "Admin" && (
                        <Link
                          to="/admin/"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Admin Dashboard
                        </Link>
                      )}
                    </li>
                    {user && (
                      <>
                        <li>
                          <Link
                            to="/mybookings"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My Bookings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profile
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                      {user.role && (
                        <Link
                          to="/logout"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Logout
                        </Link>
                      )}
                    </li>
                  </ul>
                  {/* <div class="py-1">
                <Link
                  to="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Separated link
                </Link>
              </div> */}
                </div>
              </>
            )}

            {/* <Link
              to="/"
              class="mr-5 hover:text-indigo-500 font-medium  hover:border-b-2 hover:border-indigo-400"
            >
              Fourth Link
            </Link> */}
            {/* {user.role && user.role === "Vendor" && (
              <Link
                to="/vendordashboard"
                className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600 md:mt-0"
              >
                Vendor Dashboard
              </Link>
            )} */}
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
          </nav>
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
