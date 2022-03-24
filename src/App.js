import "./App.css";

import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
/* import { ForgetPassword } from "./components/auth/ForgetPassword"; */

/* import axios from "axios"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/auth/Logout";
import First from "./First";
import Admin from "./components/admin/Admin";
import axios from "axios";
import UserContext from "./UserContext";
import React, { useEffect, useState } from "react";
import Frontend from "./components/frontend/Frontend";

function App() {
  const [user, setUser] = useState({
    vendor: {},
  });
  const [userLoading, setUserLoading] = useState(false);

  const fetchUser = () => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setUser({ error: true, role: "" });
      });
  };

  useEffect(() => {
    // fetchUser();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[user, fetchUser, setUser, userLoading]}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Frontend />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/*  <Route path="/forgetpassword" element={<ForgetPassword />} />  */}
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </UserContext.Provider>
    </div>
  );
}

export default App;
