import axios from "axios";

const api = axios.create({
  baseURL: "https://m6-prj-fs-eliasjp.onrender.com",
  timeout: 5000
});

export default api;