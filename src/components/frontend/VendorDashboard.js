import React from "react";
import { Link } from "react-router-dom";

export const VendorDashboard = () => {
  return (
    <div>
      <section>
        <header className="flex text-white bg-indigo-600">
          <ul>
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
        </header>
      </section>
    </div>
  );
};
