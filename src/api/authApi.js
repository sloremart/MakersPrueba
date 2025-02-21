export const login = (email, password) => {
  const users = [
    { email: "usuario@test.com", password: "123", role: "user" },
    { email: "admin@test.com", password: "123", role: "admin" },
  ];

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("token", "fake-jwt-token");
    localStorage.setItem("user", JSON.stringify(user));
    return { token: "fake-jwt-token", user };
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
