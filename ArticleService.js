import axios from "axios";

const articleClient = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

function logError(error) {
  console.log("에러 발생: ", error.message);
  throw error;
}

function getArticleList(params = {}) {
  return articleClient
    .get("/articles", { params })
    .then((res) => res.data)
    .catch(logError);
}

function getArticle(id) {
  return articleClient
    .get(`/articles/${id}`)
    .then((res) => res.data)
    .catch(logError);
}

function createArticle(articleData) {
  return articleClient
    .post("/articles", articleData)
    .then((res) => res.data)
    .catch(logError);
}

function patchArticle(id, articleData) {
  return articleClient
    .patch(`/articles/${id}`, articleData)
    .then((res) => res.data)
    .catch(logError);
}

function deleteArticle(id) {
  return articleClient
    .delete(`/articles/${id}`)
    .then((res) => res.data)
    .catch(logError);
}

export default {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
