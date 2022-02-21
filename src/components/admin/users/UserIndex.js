import React from 'react'

export const UserIndex = () => {
  return (
    <div>
        <div>
                
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Users</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-bold">
                                           Users
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title text-bold">
                                                All Users
                                            </h3>
                                            <div className="float-right">
                                            
                                                {/* <button className="btn btn-sm bg-indigo"><i class="fas fa-plus-circle"></i>User</button> */}
                                                <Link to="/admin/users/create" className="bg-indigo btn btn-link btn-sm "> <i className="fas fa-plus-circle mr-1"></i>Add User</Link>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div
                                                id="example2_wrapper"
                                                className="dataTables_wrapper dt-bootstrap4"
                                            >
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6" />
                                                    <div className="col-sm-12 col-md-6" />
                                                </div>
                                                <div className="row" style={{overflowX: 'auto'}}>
                                                   <div classname="col-sm-12" >
    
    
                                                        <table
                                                            id="example2"
                                                            className="table table-bordered table-hover dataTable dtr-inline collapsed table-indigo"
                                                            aria-describedby="example2_info"
                                                        >
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        className="sorting sorting_asc"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-sort="ascending"
                                                                        aria-label="Rendering engine: activate to sort column descending"
                                                                    >
                                                                        Id
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="Browser: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Name
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="Platform(s): activate to sort column ascending"
                                                                        
                                                                    >
                                                                       Email
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="Engine version: activate to sort column ascending"
                                                                        
                                                                    >
                                                                        Phone
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Password
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Address
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Document
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Role
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Created at
                                                                    </th>
                                                                    <th
                                                                        className="sorting"
                                                                        tabIndex={0}
                                                                        aria-controls="example2"
                                                                        rowSpan={1}
                                                                        colSpan={1}
                                                                        aria-label="CSS grade: activate to sort column ascending"
                                                                       
                                                                    >
                                                                        Action
                                                                    </th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="odd">
                                                                    <td
                                                                        className="dtr-control sorting_1"
                                                                        tabIndex={0}
                                                                    >
                                                                        Gecko
                                                                    </td>
                                                                    <td
                                                                        
                                                                    >
                                                                        Firefox 1.0
                                                                    </td>
                                                                    <td
                                                                        
                                                                    >
                                                                        Win 98+ /
                                                                        OSX.2+
                                                                    </td>
                                                                    <td
                                                                        
                                                                    >
                                                                        1.7
                                                                    </td>
                                                                    <td
                                                                        
                                                                    >
                                                                        A
                                                                    </td>
                                                                    <td
                                                                       
                                                                    >
                                                                        A
                                                                    </td>
                                                                    <td
                                                                       
                                                                    >
                                                                        A
                                                                    </td>
                                                                    <td
                                                                       
                                                                    >
                                                                        A
                                                                    </td>
                                                                    <td
                                                                       
                                                                    >
                                                                        A
                                                                    </td>
                                                                    <td
                                                                       
                                                                    >
                                                                         <Link to="/editUser" className=" btn btn-link  bg-primary btn-sm m-1 "> <i class="fas fa-edit ml-1 mr-1"></i> Edit</Link> 
                                                                       
                                                                     <Link to="/showUser" className="btn btn-link bg-success btn-sm m-1"> <i class="fas fa-eye ml-1 mr-1"></i>Show </Link>
                                                                     <Link to="#" className="btn btn-link bg-danger btn-sm m-1"> <i class="fas fa-trash ml-1 mr-1"></i>Delete</Link>
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        
                                                        </table>
                                                    </div>
                                                </div>
                                                
                                                           
                                                       
                                                    
                                               
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                
            </div>
    </div>
  )
}
