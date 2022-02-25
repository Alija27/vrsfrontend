import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Frame1.png';

export const Sidebar = () => {
  return (
    <div>
  <aside className="main-sidebar sidebar-light-indigo elevation-4">
    {/* Brand Logo */}
    <Link to="" className="brand-link">
      <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      
     
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
               Dashboard
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/users" className="nav-link">
              <i className="nav-icon fas fa-users" />
              <p>
              Users
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <i className="nav-icon fas fa-portrait" />
              <p>
               Vendors
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-truck-moving" />
              <p>
               Types
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-car" />
              <p>
              Vehicles
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-list" />
              <p>
               Rentals
                
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-star" />
              <p>
            Reviews
                
              </p>
            </Link>
          </li>

        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

  )
}
