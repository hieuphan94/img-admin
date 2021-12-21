import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: "https://api.imagetravel.vn/api",
  responseType: "json",
});
