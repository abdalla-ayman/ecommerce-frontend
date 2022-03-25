import apiClient from "./http-common";

const addItem = async (params) => {
  const { name, price, img, category } = params;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("img", img);
  formData.append("category", category);
  const res = await apiClient.post("/product/create", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return res;
};

const getItems = async (params) => {
  const { keyword, page, category } = params;
  const res = await apiClient.get("/product/", {
    headers: {
      keyword,
      page,
      category,
    },
  });
  return res;
};

export { addItem, getItems };
