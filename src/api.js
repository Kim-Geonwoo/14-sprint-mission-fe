const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({ page = 1, pageSize = 10, orderBy = "recent", keyword = "" }) {
  const url = `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${encodeURIComponent(keyword)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
