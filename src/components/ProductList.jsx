import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import SortDropdown from "./SortDropdown";
import ButtonXS from "./ButtonXS";
import Pagination from "./Pagination";
import { getProducts } from "../api";

function getPageSize() {
  const width = window.innerWidth;
  if (width >= 1024) return 10;
  if (width >= 768) return 6;
  return 4;
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("최신순");
  const [keyword, setKeyword] = useState("");
  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    function handleResize() {
      setPageSize(getPageSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const order = orderBy === "좋아요순" ? "favorite" : "recent";
      const data = await getProducts({ page, pageSize, orderBy: order, keyword });
      setProducts(data.list);
      setTotalCount(data.totalCount);
    }
    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  const totalPages = Math.ceil(totalCount / pageSize);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
    setPage(1);
  }

  function handleSortSelect(option) {
    setOrderBy(option);
    setPage(1);
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 font-sans">판매 중인 상품</h2>
          <div className="md:hidden">
            <ButtonXS state="default" text="상품 등록하기" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Search value={keyword} onChange={handleKeywordChange} />
          <div className="hidden md:block">
            <ButtonXS state="default" text="상품 등록하기" />
          </div>
          <SortDropdown value={orderBy} onSelect={handleSortSelect} />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
