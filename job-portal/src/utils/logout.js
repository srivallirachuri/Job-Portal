export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("role");
  localStorage.removeItem("name");

  window.location.href = "/login";
};
