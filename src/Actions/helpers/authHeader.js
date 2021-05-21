export default function authHeader() {
  const auth = localStorage.getItem("token");
  console.log(auth);
  return { "x-login-token": auth };
}