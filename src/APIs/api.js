import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3919/api",
});
// api.interceptors.request.use(
//   (req) => {
//     if (
//       req.url.includes("/blog")
//     ) {
//       req.headers["x-login-token"] = localStorage.getItem("token") || "";
//     }
//     return req;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
export default api;