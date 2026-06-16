import axios from "axios";

const productClient = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

function logError(error) {
  console.log("에러 발생: ", error.message);
  throw error;
}

async function getProductList(params = {}) {
  try {
    const res = await productClient.get("/products", { params });
    return res.data;
  } catch (error) {
    logError(error);
  }
}

async function getProduct(id) {
  try {
    const res = await productClient.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    logError(error);
  }
}

async function createProduct(productData) {
  try {
    const res = await productClient.post("/products", productData);
    return res.data;
  } catch (error) {
    logError(error);
  }
}

async function patchProduct(id, productData) {
  try {
    const res = await productClient.patch(`/products/${id}`, productData);
    return res.data;
  } catch (error) {
    logError(error);
  }
}

async function deleteProduct(id) {
  try {
    const res = await productClient.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    logError(error);
  }
}

export default {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
