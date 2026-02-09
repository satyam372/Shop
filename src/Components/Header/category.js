import React from "react";
import CategoryItem from "./Categories";

const Categories = () => {
  const categories = [
    {
      id: "all",
      name: "All",
      subCategories: [],
    },
    {
      id: "clothing",
      name: "Baby Care",
      subCategories: [
        { id: "mens", name: "Men", slug: "mens" },
        { id: "womens", name: "Women", slug: "womens" },
        { id: "kids", name: "Kids", slug: "kids" },
      ],
    },
    {
      id: "electronics",
      name: "Face Care",
      subCategories: [
        { id: "phones", name: "Phones", slug: "phones" },
        { id: "laptops", name: "Laptops", slug: "laptops" },
        { id: "accessories", name: "Accessories", slug: "accessories" },
      ],
    },
    {
      id: "home",
      name: "Intimate Care",
      subCategories: [
        { id: "furniture", name: "Furniture", slug: "furniture" },
        { id: "decor", name: "Decor", slug: "decor" },
        { id: "kitchen", name: "Kitchen", slug: "kitchen" },
      ],
    },
    {
      id: "books",
      name: "Adult Diapers",
      subCategories: [
        { id: "fiction", name: "Fiction", slug: "fiction" },
        { id: "nonfiction", name: "Non-Fiction", slug: "nonfiction" },
      ],
    },
    {
      id: "books",
      name: "Ice Cream",
      subCategories: [
        { id: "fiction", name: "Fiction", slug: "fiction" },
        { id: "nonfiction", name: "Non-Fiction", slug: "nonfiction" },
      ],
    },
    {
      id: "books",
      name: "Hair Care",
      subCategories: [
        { id: "fiction", name: "Fiction", slug: "fiction" },
        { id: "nonfiction", name: "Non-Fiction", slug: "nonfiction" },
      ],
    },
    {
      id: "books",
      name: "Insect Repellent",
      subCategories: [
        { id: "fiction", name: "Fiction", slug: "fiction" },
        { id: "nonfiction", name: "Non-Fiction", slug: "nonfiction" },
      ],
    },
    {
      id: "books",
      name: "For Toodlers",
      subCategories: [
        { id: "fiction", name: "Fiction", slug: "fiction" },
        { id: "nonfiction", name: "Non-Fiction", slug: "nonfiction" },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <ul className="flex items-center px-6 py-4 gap-8">
        {categories.map((cat) => (
          <CategoryItem key={cat.id} category={cat} />
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
