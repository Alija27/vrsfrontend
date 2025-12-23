import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-50 border-t border-gray-200">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Company Info */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full"
                src="Frame1.png"
                alt="VRS Logo"
              />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Vehicle Rental System
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Your trusted platform for vehicle rentals. Find the perfect
              vehicle for your journey or share your vehicle and earn.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/vehicles"
                  className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Vehicles
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/vendor-register"
                  className="text-gray-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Become a Vendor
                </Link>
              </li>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <span className="text-gray-600">Vehicle Rental</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600">Vehicle Listing</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600">Booking Management</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600">Vendor Dashboard</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600">24/7 Support</span>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
