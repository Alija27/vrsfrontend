import axios from "axios";

const token = localStorage.getItem("token");
const useAxios = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default useAxios;
