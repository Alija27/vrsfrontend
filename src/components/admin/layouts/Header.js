import React from 'react'

export const Header = () => {
  return (
    <div>
        {/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    
      
    
    {/* Notifications Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        Admin
        
      </a>
      <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
       
        
        <a href="#" className="dropdown-item">
          <i className="fas fa-user-tie mr-2" /> Profile
         
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <i className="fas fa-home mr-2" /> Home
         
        </a>
        <div className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <i className="fas fa-key mr-2" /> Logout
          
        </a>
        
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    
  </ul>
</nav>

    </div>
  )
}
