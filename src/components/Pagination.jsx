const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="inline-flex justify-start items-center gap-1">
      <button className="size-10 bg-white rounded-full border border-gray-200 flex justify-center items-center">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M5 1L1 5L5 9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`size-10 p-3 rounded-[40px] inline-flex justify-center items-center text-base font-semibold ${
            page === 1
              ? "bg-primary-100 text-gray-50"
              : "bg-white border border-gray-200 text-gray-500"
          }`}
          style={{ fontFamily: "Pretendard" }}
        >
          {page}
        </button>
      ))}

      <button className="size-10 bg-white rounded-full border border-gray-200 flex justify-center items-center">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

// 현재 페이지수는 5개로 고정 및 1페이지는 활성화중
export default Pagination;
