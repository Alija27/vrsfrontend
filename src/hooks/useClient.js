import axios from "axios";
import { useState } from "react";

const useClient = () => {
  const [token] = useState(localStorage.getItem("token"));

  return axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default useClient;
