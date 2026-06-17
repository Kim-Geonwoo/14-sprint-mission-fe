import ProductCard from "./ProductCard";

const ProductBest = () => {
  return (
    <div className="w-full flex flex-col gap-4 mx-0-auto px-4 md:px-6 lg:px-90">
      <p className="text-xl font-bold text-gray-900 font-sans">베스트 상품</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard />
        <div className="hidden md:block"><ProductCard /></div>
        <div className="hidden lg:block"><ProductCard /></div>
        <div className="hidden lg:block"><ProductCard /></div>
      </div>
    </div>
  );
};

export default ProductBest;
