import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "./Frame1.png";

export const Sidebar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-light-indigo elevation-4">
        {/* Brand Logo */}
        <NavLink to="/admin" className="brand-link">
          <img
            src="Frame1.png"
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">VRS Admin</span>
        </NavLink>
        {/* Sidebar */}
        <div className="sidebar ">
          {/* Sidebarmt-2 user panel (optional) */}

          {/* Sidebar Menu */}
          <nav className="nav-item">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li className="nav-item">
                <NavLink
                  to="/admin/"
                  className={(navData) =>
                    navData.isActive ? "active nav-link mt-2" : " nav-link mt-2"
                  }
                >
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/users"
                  className={(navData) =>
                    navData.isActive ? "active nav-link mt-2" : " nav-link mt-2"
                  }
                >
                  <i className="nav-icon fas fa-users" />
                  <p>Users</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/vendors"
                  activeclassname="active"
                  className={(navData) =>
                    navData.isActive ? "active nav-link mt-2" : " nav-link mt-2"
                  }
                >
                  <i className="nav-icon fas fa-portrait" />
                  <p>Vendors</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/types"
                  activeclassname="active"
                  className={(navData) =>
                    navData.isActive ? "active nav-link mt-2" : " nav-link mt-2"
                  }
                >
                  <i className="nav-icon fas fa-truck-moving" />
                  <p>Types</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/locations"
                  activeclassname="active"
                  className={(navData) =>
                    navData.isActive ? "active nav-link mt-2" : " nav-link mt-2"
                  }
                >
                  <i className="nav-icon fas fa-truck-moving" />
                  <p>Locations</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/vehicles"
                  activeclassname="active"
                  className="mt-2 nav-link"
                >
                  <i className="nav-icon fas fa-car" />
                  <p>Vehicles</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/rentals"
                  activeclassname="active"
                  className="mt-2 nav-link"
                >
                  <i className="nav-icon fas fa-list" />
                  <p>Rentals</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin/reviews"
                  activeclassname="active"
                  className="mt-2 nav-link"
                >
                  <i className="nav-icon fas fa-star" />
                  <p>Reviews</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};
