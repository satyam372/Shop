import { ShoppingCart } from "lucide-react";

const CartIcon = ({ count = 0 }) => {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="w-6 h-6 text-gray-700" />

      {count > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                         w-5 h-5 flex items-center justify-center rounded-full"
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
