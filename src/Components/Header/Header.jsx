import SearchInput from "../SearchInput/SearchInput";
import { HiBell } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex  justify-between p-5 bg-[#007EAF] h-20">
      <div className="flex gap-10 ">
        <img src="/logo.png" alt="" />

        <div className="w-[25rem]">
          <SearchInput />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-white flex items-center justify-center rounded-full w-10 h-10 hover:cursor-pointer">
          <span>
            <HiBell className="text-2xl" />
          </span>
        </div>

        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer">
          <img
            src="/Avatar.png"
            alt=""
            className=" rounded-full w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
