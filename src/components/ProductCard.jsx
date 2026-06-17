import HeartIcon from "../assets/icons/heart_outline.svg";


const ProductCard = () => {
  
  // 샘플 데이터 (나중에 API 연동 시 삭제 예정)
  const sampleName = "아이패드 미니 팝니다";
  const samplePrice = "500,000원";
  const sampleFavoriteCount = 240;
  const sampleImage = "https://placehold.co/282x282";
  const sampleImageTag = "아이패드";
  // 샘플 데이터 끝

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full aspect-square rounded-2xl bg-gray-50 overflow-hidden">
        <img src={sampleImage} alt={sampleImageTag} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-medium text-gray-800 font-sans">{sampleName}</p>
        <p className="text-base font-bold text-gray-800 font-sans">{samplePrice}</p>

        <div className="flex items-center gap-1">
          <img src={HeartIcon} alt="좋아요" className="w-4 h-4 text-gray-600" />
          <span className="text-xs font-medium text-gray-600 font-sans">{sampleFavoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
