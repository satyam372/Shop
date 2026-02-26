import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const Cards = ({ product }) => {
  const {
    image = "https://via.placeholder.com/400x300",
    name = "Product Name",
    price = 0,
    discountPrice = 0,
  } = product || {};

  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setInCart(true);
    setQuantity(1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleDeleteFromCart = () => {
    setInCart(false);
    setQuantity(1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-xs">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-700 mt-1">Price: ${price}</p>
      <p className="text-gray-500 mt-1">Discounted Price: ${discountPrice}</p>

      {!inCart ? (
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors font-semibold"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-4 space-y-2">
          {/* Quantity Controls */}
          <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
            <button
              onClick={handleDecreaseQuantity}
              className="text-gray-700 hover:text-red-500"
              disabled={quantity <= 1}
            >
              <Minus size={20} />
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="text-gray-700 hover:text-green-500"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleDeleteFromCart}
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors font-semibold"
          >
            <Trash2 size={20} />
            Remove from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
