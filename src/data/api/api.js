import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: "http://api.imagetravel.vn/api",
  responseType: "json",
});
