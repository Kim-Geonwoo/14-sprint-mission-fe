import { useState } from "react";
import sortIcon from "../assets/icons/ic_sort.svg";

const SortDropdown = ({ value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-[42px] h-[42px] flex items-center justify-center bg-white rounded-xl border border-gray-200"
      >
        <img src={sortIcon} alt="정렬" />
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex w-[130px] px-5 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center"
      >
        <span className="text-base text-gray-800 font-sans">{value}</span>
        <svg width="16" height="10" viewBox="0 0 16 10" className={isOpen ? "rotate-180" : ""}>
          <polygon points="8,10 0,0 16,0" fill="#1F2937" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-[130px] z-10">
          <button
            onClick={() => handleSelect("최신순")}
            className="w-[130px] h-[42px] flex items-center justify-center bg-white text-base text-gray-800 font-sans border border-gray-200 rounded-t-xl"
          >
            최신순
          </button>
          <button
            onClick={() => handleSelect("좋아요순")}
            className="w-[130px] h-[42px] flex items-center justify-center bg-white text-base text-gray-800 font-sans border border-t-0 border-gray-200 rounded-b-xl"
          >
            좋아요순
          </button>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
