import React from "react";
import Cards from "../Card/Cards";

const HomePageDisplayCard = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Skin Care</h2>
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
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Trending</h2>
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
      </section>
    </div>
  );
};

export default HomePageDisplayCard;
