import apiClient from "./http-common";

const addToCart = async (params) => {
  const { id: itemId, quantity, action } = params;
  const res = await apiClient.post(
    "/cart//modify",
    {
      itemId,
      quantity,
      action,
    },
    {
      headers: {
        token: localStorage.getItem("token") || "",
      },
    }
  );
  return res;
};
const getTheCart = async () => {
  const res = await apiClient.get("/cart/", {
    headers: {
      token: localStorage.getItem("token") || "",
    },
  });
  return res;
};

const checkout = async () => {
  const res = await apiClient.get("/cart/checkout", {
    headers: {
      token: localStorage.getItem("token") || "",
    },
  });
  return res;
};

export { addToCart, getTheCart, checkout };
