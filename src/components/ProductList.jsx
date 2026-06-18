import { useState } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import SortDropdown from "./SortDropdown";
import ButtonXS from "./ButtonXS";
import Pagination from "./Pagination";

const ProductList = () => {
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("최신순");

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleSortSelect(option) {
    setOrderBy(option);
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <div className="hidden md:block"><ProductCard /></div>
          <div className="hidden md:block"><ProductCard /></div>
          <div className="hidden lg:block"><ProductCard /></div>
          <div className="hidden lg:block"><ProductCard /></div>
          <div className="hidden lg:block"><ProductCard /></div>
          <div className="hidden lg:block"><ProductCard /></div>
        </div>

        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
