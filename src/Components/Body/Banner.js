import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60",
    link: "/products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=60",
    link: "/offers",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
    link: "/new-arrivals",
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      <img
        src={banners[current].image}
        alt="Shop Banner"
        className="w-full h-full object-cover cursor-pointer transition-all duration-700"
        onClick={() => navigate(banners[current].link)}
      />

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
