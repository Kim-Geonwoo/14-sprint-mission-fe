import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api";

const ProductBest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchBestProducts() {
      const data = await getProducts({ pageSize: 4, orderBy: "favorite" });
      setProducts(data.list);
    }
    fetchBestProducts();
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4 px-4 md:px-6">
      <p className="text-xl font-bold text-gray-900 font-sans">베스트 상품</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          let visibility = "";
          if (index >= 2) {
            visibility = "hidden lg:block";
          } else if (index >= 1) {
            visibility = "hidden md:block";
          }

          return (
            <div key={product.id} className={visibility}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductBest;
