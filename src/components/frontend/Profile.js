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
    if (user && user.vendor) {
      console.log(user.vendor.id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  alt="Profile"
                  src={`http://localhost:8000/storage/${user.image}`}
                  className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="absolute bottom-0 right-0 h-8 w-8 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {user.name || "User"}
            </h1>
            <p className="text-indigo-100 text-lg">{user.role || "User"}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Details Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Personal Information
                </h2>
                <Link
                  to={`/edit-profile/${user.id}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Profile
                </Link>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                      <p className="text-gray-900">{user.name || "N/A"}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                      <p className="text-gray-900">{user.email || "N/A"}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                      <p className="text-gray-900">{user.phone || "N/A"}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {user.role || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                    <p className="text-gray-900 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {user.address || "N/A"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Citizenship Number
                  </label>
                  <div className="px-4 py-3 bg-gray-50 rounded-md border border-gray-200">
                    <p className="text-gray-900">
                      {user.citizenship_number || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citizenship Image Card */}
            {user.citizenship_image && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Citizenship Document
                </h2>
                <div className="flex justify-center">
                  <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                    <img
                      src={`http://localhost:8000/storage/${user.citizenship_image}`}
                      alt="Citizenship Document"
                      className="max-w-full h-auto rounded-lg shadow-sm"
                      style={{ maxHeight: "500px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Link
                  to={`/edit-profile/${user.id}`}
                  className="flex items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Edit Profile
                  </span>
                </Link>

                <Link
                  to="/mybookings"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">My Bookings</span>
                </Link>

                {user.role === "Vendor" && user.vendor && (
                  <Link
                    to="/vendordashboard"
                    className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      Vendor Dashboard
                    </span>
                  </Link>
                )}
              </div>
            </div>

            {/* Account Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Account Information
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Account Status</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm text-gray-900">
                    {new Date().getFullYear()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">User ID</span>
                  <span className="text-sm text-gray-900 font-mono">
                    #{user.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
