import React from 'react'
import { Link } from 'react-router-dom'

export const UserCreate = () => {
  return (
    <div>

    <div>
        <div className="content-wrapper">
        <div className="content-header">
    <div className="container-fluid">
      <div className="card m-1">
        <div className="card-header">
          <h3 className="card-title text-bold">Add New User</h3>
          <div className="card-tools">
            <Link to="/admin/users" className="btn-link btn-sm bg-indigo">
             
              <span>Go Back</span>
            </Link>
          </div>
        </div>
        <div className="card-body">
        <form method="post" >
            
            <div className="form-group">
              <label htmlFor="name">Name <span className="text-danger" title="Required">*</span></label>
              <input type="text" name="name" id="name"  className="form-control "  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span className="text-danger" title="Required">*</span></label>
              <input type="text" name="email" id="email"  className="form-control " />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact<span className="text-danger" title="Required">*</span></label>
              <input type="text" name="phone" id="phone"  className="form-control " />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password<span className="text-danger" title="Required">*</span></label>
              <input type="text" name="password" id="password" className="form-control " />
            </div>
            <div className="form-group">
              <label htmlFor="address">Addres<span className="text-danger" title="Required">*</span></label>
              <input type="text" name="address" id="address" className="form-control " />
            </div>
            
            {/* <div className="form-group">
              <label htmlFor="document">Document</label>
              <input type="file" name="document" id="document" className="form-control " />
            </div> */}
            <div className="form-group">
              <label htmlFor="document">Role</label>
              <select className="form-control">
  <option className="Disabled">Select Role</option>
  <option className="Disabled"value="admin">Admin</option>
  <option className="Disabled"value="vendor">Vendor</option>
  <option className="Disabled"value="customer">Customer</option>
</select>
            </div>
            
            </form>
        
      </div>
    </div>
  </div>
</div>
</div>
    </div>
 

    </div>
  )
}
