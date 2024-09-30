import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
    <div className="relative w-full ">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-xl  focus:outline-none "
      />

      {/* Search Icon */}
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchInput;
