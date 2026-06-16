import ArticleService from "./ArticleService.js";
import ProductService from "./ProductService.js";

ArticleService.getArticleList({ page: 1, pageSize: 10, keyword: "" })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

ArticleService.createArticle({
  title: "테스트 게시글",
  content: "게시글 내용입니다.",
  image: "https://example.com/image.png",
})
  .then((article) => {
    console.log(article);
    return ArticleService.getArticle(article.id);
  })
  .then((article) => {
    console.log(article);
    return ArticleService.patchArticle(article.id, { title: "수정된 게시글" });
  })
  .then((article) => {
    console.log(article);
    return ArticleService.deleteArticle(article.id);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

ProductService.getProductList({ page: 1, pageSize: 10, keyword: "" })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

ProductService.createProduct({
  name: "테스트 제품",
  description: "제품 설명입니다.",
  price: 10000,
  tags: ["태그"],
  images: ["https://example.com/image.png"],
})
  .then((product) => {
    console.log(product);
    return ProductService.getProduct(product.id);
  })
  .then((product) => {
    console.log(product);
    return ProductService.patchProduct(product.id, { price: 20000 });
  })
  .then((product) => {
    console.log(product);
    return ProductService.deleteProduct(product.id);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
