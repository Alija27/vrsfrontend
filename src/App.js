import "./App.css";
import { Admin } from "./Admin";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ForgetPassword } from "./components/auth/ForgetPassword";

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./UserContext";
import { useEffect, useState } from "react";
import Logout from "./components/auth/Logout";
import First from "./First";
import { Admin } from "./components/admin/Admin";

/* import axios from 'axios'; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import UserContext from './UserContext';
import { useEffect, useState } from 'react'; */

function App() {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    await axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data.role);
      })
      .catch((err) => {
        setUser({ error: true });
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[user, fetchUser]}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/about" element={<About/>}/> */}
            <Route path="/" element={<First />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      {/* <UserContext.Provider value={[user, fetchUser]}> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      {/*  </UserContext.Provider> */}
    </div>
  );
}

export default App;
