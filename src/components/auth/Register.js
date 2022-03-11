import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div>
        <div className="register-box">
  <div className="card card-outline card-indigo">
    <div className="card-header text-center">
      <Link to="#" className="h1"><b>Register</b></Link>
    </div>
    <div className="card-body">
      
      <form action="#" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control required" placeholder="Full name" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Address" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-home" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Phone" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-phone" />
            </div>
          </div>
        </div><div className="input-group mb-3">
          <input type="file" className="form-control"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-image" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Retype password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <Link to="#">terms</Link>
              </label>
            </div>
          </div>
         
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
         
        </div>
      </form>
      {/* <div className="social-auth-links text-center">
        <Link to="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </Link>
        <Link to="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </Link>
      </div> */}
      <Link to="/login" className="text-center">Already have an account? Login</Link>
    </div>
    
  </div>
</div>
{/* <div className="container-fluid">
  <div className="row no-gutter">
    <div className="col-md-6 d-none d-md-flex bg-image" />
    <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6 mx-auto">
              <h3 className="display-4">LOGIN!!</h3> <br />
              <form>
                <div className="form-group mb-3"> <input id="inputEmail" type="email" placeholder="Email address" required autofocus className="form-control rounded-pill border-0 shadow-sm px-4" /> </div>
                <div className="form-group mb-3"> <input id="inputPassword" type="password" placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" /><br /> </div>
                <div className="custom-control custom-checkbox mb-3"> <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" /> <label htmlFor="customCheck1" className="custom-control-label">Remember password</label> </div> <button type="submit" className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                <div className="text-center d-flex justify-content-between mt-4">
                  <p> OR &nbsp;<Link to=" " className="font-italic text-muted"> <u>Create Account</u></Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

    </div>
  )
}
