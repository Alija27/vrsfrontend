import React from "react";
import { Link } from "react-router-dom";

export const VendorDashboard = () => {
  return (
    <div>
      <div class="navbar bg-base-100 h-full">
        <div class="flex justify-center border-b border-gray-200 dark:border-gray-700">
          <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-indigo-400">
            <Link to="/registeredvehicle">My Vehicles</Link>
          </button>

          <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-indigo-400">
            <Link to="/addvehicle">Add Vehilce</Link>
          </button>

          <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-indigo-400">
            <Link to="/vehiclerequest">Notification</Link>
          </button>
          <button class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-indigo-400">
            {" "}
            <Link to="/vendorprofile">Vendor Profile</Link>
          </button>
        </div>
        <span className="text-5xl text-gray-500 my-96 mx-96">
          Welcome Vendor
        </span>
        {/* <div class="navbar-start">
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/registeredvehicle">My Vehicles</Link>
            </li>
            <li>
              <Link to="/addvehicle">Add Vehilce</Link>
            </li>
            <li>
              <Link to="/vehiclerequest">Notification</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
