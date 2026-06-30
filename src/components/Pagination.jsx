const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + 4);
  start = Math.max(1, end - 4);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="inline-flex justify-start items-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="size-10 bg-white rounded-full border border-gray-200 flex justify-center items-center disabled:opacity-40"
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M5 1L1 5L5 9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`size-10 p-3 rounded-[40px] inline-flex justify-center items-center text-base font-semibold ${
            page === currentPage
              ? "bg-primary-100 text-gray-50"
              : "bg-white border border-gray-200 text-gray-500"
          }`}
          style={{ fontFamily: "Pretendard" }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="size-10 bg-white rounded-full border border-gray-200 flex justify-center items-center disabled:opacity-40"
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
