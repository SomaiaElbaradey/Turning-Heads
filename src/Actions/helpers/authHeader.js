export default function authHeader() {
  const auth = localStorage.getItem("token");
  return { "x-login-token": auth };
}