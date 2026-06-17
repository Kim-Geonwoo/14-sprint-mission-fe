import ButtonXS from './ButtonXS';
import Pagination from './Pagination';


const Header = () => {
  return (
    <header>
      <div className="flex justify-content space-between align-items-center bg-white border-b-[1px] border-b-gray-200 px-[200px] py-0">
        <div>
          <ButtonXS state="default" text="로그인" />
        </div>
      </div>
      <h1>My App</h1>
      <Pagination />

    </header>
  );
};

export default Header;