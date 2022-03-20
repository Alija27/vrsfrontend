import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const naviagte = useNavigate();

  useEffect(async () => {
    let token = localStorage.getItem("token");
    if (token) {
      await axios.post("http://localhost:8000/api/logout", { token });
    }

    localStorage.setItem("token", "");
    naviagte("/login");
  });

  return null;
}

export default Logout;
