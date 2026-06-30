import HeartIcon from "../assets/icons/heart_outline.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden">
        <img
          src={product.images[0] || "https://placehold.co/282x282"}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "https://placehold.co/282x282?text=No+Image")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-gray-800 font-sans">{product.name}</p>
        <p className="text-base font-bold text-gray-800 font-sans">{product.price.toLocaleString()}원</p>

        <div className="flex items-center gap-1">
          <img src={HeartIcon} alt="좋아요" className="w-4 h-4" />
          <span className="text-xs font-medium text-gray-600 font-sans">{product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
