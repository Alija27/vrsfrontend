import React from "react";

import { Link } from "react-router-dom";
import "../../index.css";
import useAxios from "../../hooks/useAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { useContext } from "react";

import UserContext from "../../UserContext";
import { useParams } from "react-router-dom";

export const EditProfile = () => {
  const { id } = useParams();
  const [user, fetchUser] = useContext(UserContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
    citizenship_number: "",
  });
  const [originalUserData, setOriginalUserData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  const getUser = async () => {
    try {
      const res = await useAxios.get(`/userId/${id}`);
      console.log("Fetched user data:", res.data);

      // Set user data with all fields
      const fetchedData = {
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        address: res.data.address || "",
        password: "", // Don't pre-fill password
        role: res.data.role || "",
        citizenship_number: res.data.citizenship_number || "",
      };
      setUserData(fetchedData);
      // Store original data for comparison
      setOriginalUserData({
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || "",
        address: res.data.address || "",
        role: res.data.role || "",
        citizenship_number: res.data.citizenship_number || "",
      });
      setLoadingData(false);
    } catch (err) {
      console.error("Error fetching user data:", err);

      // Fallback to user from context if API fails
      if (user && user.id && user.id.toString() === id) {
        console.log("Using user from context as fallback");
        const fallbackData = {
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          address: user.address || "",
          password: "",
          role: user.role || "",
          citizenship_number: user.citizenship_number || "",
        };
        setUserData(fallbackData);
        // Store original data for comparison
        setOriginalUserData({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          address: user.address || "",
          role: user.role || "",
          citizenship_number: user.citizenship_number || "",
        });
        setLoadingData(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load user data",
        });
        setLoadingData(false);
      }
    }
  };

  // Load user data when component mounts or id changes
  useEffect(() => {
    setValidationError({});

    if (!id) {
      setLoadingData(false);
      return;
    }

    // Always fetch from API to get complete and up-to-date data
    getUser();
  }, [id]);

  // Also watch for user context changes and update if it matches
  useEffect(() => {
    if (
      user &&
      user.id &&
      user.id.toString() === id &&
      user.name &&
      loadingData
    ) {
      console.log("User context updated, using it:", user);
      const contextData = {
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        password: "",
        role: user.role || "",
        citizenship_number: user.citizenship_number || "",
      };
      setUserData(contextData);
      // Store original data for comparison
      setOriginalUserData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        role: user.role || "",
        citizenship_number: user.citizenship_number || "",
      });
      setLoadingData(false);
    }
  }, [user, id, loadingData]);

  /* const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: "",
    citizenship_number: "",
  }); */
  const [image, setImage] = useState(null);
  const [citizenshipimage, setCitizenshipimage] = useState(null);
  const navigate = useNavigate();
  const [validation, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // Clear validation error for this field when user starts typing
    if (validation[name]) {
      setValidationError({
        ...validation,
        [name]: undefined,
      });
    }
  };
  const handleImage = (files) => {
    setImage(files[0]);
    console.log(image);
  };
  const handleCitizenshipImage = (files) => {
    setCitizenshipimage(files[0]);
    console.log(citizenshipimage);
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValidationError({});

    const data = new FormData();

    // Only append fields that have changed from original values
    if (originalUserData) {
      // Name
      if (userData.name !== originalUserData.name) {
        data.append("name", userData.name || "");
      }

      // Email
      if (userData.email !== originalUserData.email) {
        data.append("email", userData.email || "");
      }

      // Phone
      if (userData.phone !== originalUserData.phone) {
        data.append("phone", userData.phone || "");
      }

      // Address
      if (userData.address !== originalUserData.address) {
        data.append("address", userData.address || "");
      }

      // Role
      if (userData.role !== originalUserData.role) {
        data.append("role", userData.role || "");
      }

      // Citizenship Number
      if (userData.citizenship_number !== originalUserData.citizenship_number) {
        data.append("citizenship_number", userData.citizenship_number || "");
      }
    } else {
      // Fallback: send all fields if original data not available
      data.append("name", userData.name || "");
      data.append("email", userData.email || "");
      if (userData.phone) data.append("phone", userData.phone);
      if (userData.address) data.append("address", userData.address);
      if (userData.role) data.append("role", userData.role);
      if (userData.citizenship_number)
        data.append("citizenship_number", userData.citizenship_number);
    }

    // Only append password if provided (always check password separately)
    if (userData.password && userData.password.trim() !== "") {
      data.append("password", userData.password);
    }

    // Only append images if they are selected
    if (image) {
      data.append("image", image);
    }

    if (citizenshipimage) {
      data.append("citizenship_image", citizenshipimage);
    }

    try {
      const res = await axios.put(
        `http://localhost:8000/api/updateProfile/${id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Clear all validation errors on success
      setValidationError({});

      Swal.fire({
        timer: 2000,
        icon: "success",
        title: res.data.message || "Profile updated successfully",
      });

      // Refresh user data
      fetchUser();

      // Navigate back to profile instead of login
      navigate("/profile");
    } catch (err) {
      console.error("Update error:", err);
      if (err.response && err.response.status === 422) {
        setValidationError(err.response.data.errors || {});
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: "Please check the form for errors",
        });
      } else {
        Swal.fire({
          timer: 2000,
          icon: "error",
          title: err.response?.data?.message || "Failed to update profile",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
            <p className="mt-2 text-sm text-gray-600">
              Update your personal information
            </p>
          </div>
          <form onSubmit={submitUserData}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                value={userData.name || ""}
                onChange={handleInputChange}
              />
              {validation.name &&
                Array.isArray(validation.name) &&
                validation.name.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.name[0]}
                  </p>
                )}
            </div>
            {/* <div className="mb-6 form-group">
            <input
              type="hidden"
              name="vendor_id"
              value={user.id}
              onChange={handleInputChange}
            />
          </div> */}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                value={userData.email || ""}
                onChange={handleInputChange}
              />
              {validation.email &&
                Array.isArray(validation.email) &&
                validation.email.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.email[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
                value={userData.phone || ""}
                onChange={handleInputChange}
              />
              {validation.phone &&
                Array.isArray(validation.phone) &&
                validation.phone.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.phone[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your address"
                value={userData.address || ""}
                onChange={handleInputChange}
              />
              {validation.address &&
                Array.isArray(validation.address) &&
                validation.address.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.address[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="citizenship_number"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Citizenship Number
              </label>
              <input
                type="text"
                id="citizenship_number"
                name="citizenship_number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter citizenship number"
                value={userData.citizenship_number || ""}
                onChange={handleInputChange}
              />
              {validation.citizenship_number &&
                Array.isArray(validation.citizenship_number) &&
                validation.citizenship_number.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.citizenship_number[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={userData.role || ""}
                onChange={handleInputChange}
              >
                <option value="">Select Role</option>
                <option value="Vendor">Vendor</option>
                <option value="Customer">Customer</option>
              </select>
              {validation.role &&
                Array.isArray(validation.role) &&
                validation.role.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.role[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password (Leave blank to keep current password)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter new password (optional)"
                value={userData.password || ""}
                onChange={handleInputChange}
              />
              {validation.password &&
                Array.isArray(validation.password) &&
                validation.password.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">
                    {validation.password[0]}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Profile Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => handleImage(e.target.files)}
              />
              {image && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {image.name}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="citizenship_image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Citizenship Image
              </label>
              <input
                id="citizenship_image"
                name="citizenship_image"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => handleCitizenshipImage(e.target.files)}
              />
              {citizenshipimage && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {citizenshipimage.name}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
              <Link
                to="/profile"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
