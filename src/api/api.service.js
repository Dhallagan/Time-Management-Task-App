import axios from "axios";

axios.defaults.baseURL = "https://api.jsonbin.io/";

const HTTP = axios.create({
  baseURL: axios.defaults.baseURL,
  headers: {
    "secret-key": "$2b$10$e10N1sWOu2nvGLN6JBqjR.4NsVAwSjfAKz1OtNIGTAdKNFVb/L/fW"
  }
});

export default {
  getState() {
    return HTTP.get("/b/6026265787173a3d2f5bfbdb");
  }
};
