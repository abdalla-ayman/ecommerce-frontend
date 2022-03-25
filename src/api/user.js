import apiClient from "./http-common";

const login = async (params) => {
  const res = await apiClient.post("/user/login", JSON.stringify(params));
  return res;
};

const signup = async (params) => {
  const res = await apiClient.post(`/user/signup`, JSON.stringify(params));
  return res;
};

const validateToken = async () => {
  const res = await apiClient.get("/validate-token");
  return res;
};

export { login, signup, validateToken };
