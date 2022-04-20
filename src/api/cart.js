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

export { addToCart, getTheCart };
