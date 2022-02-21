import React from 'react'
import { Link } from 'react-router-dom'


export const UserShow = () => {
  return (
    <div>
        <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>User Details</h1>
        </div>
        
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* interactive chart */}
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="far fa-chart-bar" />
                User
              </h3>
              <div className="card-tools">
                Go back
                
              </div>
            </div>
            <div className="card-body">
              <div id="interactive" style={{height: 300}} />
            </div>
            {/* /.card-body*/}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div></section></div>

    </div>
  )
}
