import React from "react";
import { Link } from "react-router-dom";

export const VendorDashboard = () => {
  return (
    <div>
      <div class="navbar bg-base-100 h-full">
        <div class="navbar-start">
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
        </div>
      </div>
    </div>
  );
};
