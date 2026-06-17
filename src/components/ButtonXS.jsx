const stateStyles = {
  default: "bg-primary-100",
  hover: "bg-primary-200",
  click: "bg-primary-300",
  inactive: "bg-gray-400",
};

const ButtonXS = ({ state = "default", text }) => {
  return (
    <button
      className={`h-10 px-6 py-3 rounded-lg shadow inline-flex justify-center items-center gap-2.5 text-gray-100 text-base font-semibold leading-6 ${stateStyles[state]}`}
      style={{ fontFamily: "Pretendard" }}
    >
      {text}
    </button>
  );
};

// 사용예시: <ButtonXS state="default" text="로그인" />
export default ButtonXS;
