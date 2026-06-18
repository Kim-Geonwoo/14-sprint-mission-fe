const Search = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-1 h-[42px] w-full md:w-[325px] pl-4 pr-5 py-[9px] bg-gray-100 rounded-xl">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="2" />
        <path d="M16.5 16.5L21 21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="검색할 상품을 입력해주세요"
        className="w-full bg-transparent outline-none text-base text-gray-800 placeholder:text-gray-400 font-sans"
      />
    </div>
  );
};

export default Search;
