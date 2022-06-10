import apiClient from "./http-common";

const addToCart = async (params) => {
  const { id: itemId, quantity, action } = params;
  const res = await apiClient.post("/cart//modify", {
    itemId,
    quantity,
    action,
  });
  return res;
};
const getTheCart = async () => {
  const res = await apiClient.get("/cart/");
  return res;
};

const checkout = async () => {
  const res = await apiClient.get("/cart/checkout");
  return res;
};

export { addToCart, getTheCart, checkout };
