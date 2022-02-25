import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/clone-d1cd6/us-central1/api", // the api (cloud func) url
  baseURL: "http://localhost:5001", // the api (cloud func) url
});

export default instance;
