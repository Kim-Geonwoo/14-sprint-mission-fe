import ButtonXS from './ButtonXS';
import BrandIcon from '../assets/brand_icon-solid.svg';

const Header = () => {
  return (
    <div class="w-full px-4 md:px-6 lg:px-48 bg-white border-b border-neutral-200 flex justify-between items-center">
      <div class="flex justify-start items-center gap-x-2 md:gap-x-5 lg:gap-x-6">
        <div class="inline-flex shrink-0 justify-start items-center gap-2">
          <img src={BrandIcon} alt="Brand Icon" class="hidden md:block" />
          <div class="justify-center text-blue-500 text-xl md:text-2xl font-bold font-['ROKAF_Sans']">판다마켓</div>
        </div>
        <div class="flex justify-center items-center gap-2 md:gap-0">
          <div class="py-6.25 md:px-1.25 md:py-5.25 lg:px-3 lg:py-5 flex justify-center items-center gap-2.5">
            <div class="text-center text-gray-600 text-base md:text-lg font-bold font-['Pretendard'] leading-6">자유게시판</div>
          </div>
          <div class="py-6.25 md:px-3.75 md:py-5.25 lg:px-3.5 lg:py-5 flex justify-center items-center gap-2.5">
            <div class="text-center text-gray-600 text-base md:text-lg font-bold font-['Pretendard'] leading-6">중고마켓</div>
          </div>
        </div>
      </div>
      <ButtonXS state="default" text="로그인" />
    </div>
  );
};

export default Header;
