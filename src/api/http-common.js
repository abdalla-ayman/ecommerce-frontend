import axios from "axios";
export default axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
    //FIXME: fix this bug
  },
});
