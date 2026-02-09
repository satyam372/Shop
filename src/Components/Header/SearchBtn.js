import { Search } from "lucide-react";

const SearchBtn = () => {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
      <Search className="w-5 h-5 text-gray-500 hover:text-red-500" />
    </div>
  );
};

export default SearchBtn;
