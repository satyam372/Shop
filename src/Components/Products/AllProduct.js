import React from "react";
import Cards from "../Card/Cards";

const AllProduct = () => {
  return (
    <div className="flex flex-wrap -m-2">
      {[
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1585386959984-a415522a0a7c?auto=format&fit=crop&w=800&q=60",
          name: "Sample Product 1",
          price: 29.99,
          discountPrice: 24.99,
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
          name: "Sample Product 2",
          price: 49.99,
          discountPrice: 39.99,
        },
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1585386959984-a415522a0a7c?auto=format&fit=crop&w=800&q=60",
          name: "Sample Product 1",
          price: 29.99,
          discountPrice: 24.99,
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
          name: "Sample Product 2",
          price: 49.99,
          discountPrice: 39.99,
        },
      ].map((p) => (
        <Cards key={p.id} product={p} />
      ))}
    </div>
  );
};

export default AllProduct;
