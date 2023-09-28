import { api } from "../services/axiosInstance";

// login
export const login = async (id, password) => {
  return await api.post("/auth/login", {
    id: id,
    password: password,
  });
};

export const renewToken = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  return await api.post("/auth/token", {
    refreshToken: refreshToken,
  });
};
// nanti aku bagi full documentation api

export const logout = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  return await api.post("/auth/logout", {
    refreshToken: refreshToken,
  });
};
