import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../UserContext";

export const Header = () => {
  const [user] = useContext(UserContext);
  console.log(user);

  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="" className="nav-link">
              Home {user && user.name}
            </Link>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="navbar-search"
              to="#"
              role="button"
            >
              <i className="fas fa-search" />
            </Link>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
              {user && user.name}
            </Link>
            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <Link to="" className="dropdown-item">
                <i className="fas fa-user-tie mr-2" /> Profile
              </Link>
              <div className="dropdown-divider" />
              <Link to="/" className="dropdown-item">
                <i className="fas fa-home mr-2" /> Home
              </Link>
              <div className="dropdown-divider" />
              <Link to="" className="dropdown-item">
                <i className="fas fa-key mr-2" /> Logout
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="fullscreen"
              to=""
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
