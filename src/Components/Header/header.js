import CartIcon from "./Carticon";
import SearchBtn from "./SearchBtn.js";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-6 border-b">
      {/* Logo */}
      <div className="text-xl font-bold">MyShop</div>

      {/* Search */}
      <div className="flex-1 max-w-lg mx-6 relative">
        <input
          className="w-full h-10 rounded-xl border px-4 pr-10 text-sm"
          placeholder="Search products..."
        />

        <SearchBtn />
      </div>

      {/* Prev Orders */}

      <div className="flex items-center gap-12">
        <button className="text-gray-700 hover:text-red-500">Orders</button>

        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
