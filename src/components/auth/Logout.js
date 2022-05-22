import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";

function Logout() {
  const naviagte = useNavigate();
  const [user, setUser] = useContext(UserContext);
  useEffect(async () => {
    let token = localStorage.getItem("token");
    if (token) {
      await axios.post("http://localhost:8000/api/logout", { token });
    }

    localStorage.setItem("token", "");
    setUser({});
    naviagte("/login");
  });

  return null;
}

export default Logout;
