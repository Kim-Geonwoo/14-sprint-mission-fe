import ButtonXS from './ButtonXS';
import BrandIcon from '../assets/brand_icon-solid.svg';

const Header = () => {
  return (
    <div class="w-full px-48 bg-white border-b border-neutral-200 inline-flex justify-between items-center">
      <div class="flex justify-start items-center gap-x-[24px]">
          <div class="inline-flex shrink-0 justify-start items-center gap-2">
            <img src={BrandIcon} alt="Brand Icon" />
            <div class="justify-center text-blue-500 text-2xl font-bold font-['ROKAF_Sans']">판다마켓</div>
          </div>
          <div class="size- flex justify-center items-center">
              <div class="size- px-3.5 py-5 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div class="text-center justify-center text-gray-600 text-lg font-bold font-['Pretendard'] leading-6">자유게시판</div>
              </div>
              <div class="size- px-3.5 py-5 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div class="text-center justify-center text-gray-600 text-lg font-bold font-['Pretendard'] leading-6">중고마켓</div>
              </div>
          </div>
      </div>
      <ButtonXS state="default" text="로그인" />
    </div>
  );
};

export default Header;