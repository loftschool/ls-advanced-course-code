import axios from "axios";

const token = localStorage.getItem("token");

if (!token) console.warn("Отсутствует токен")

const requests = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export default requests;