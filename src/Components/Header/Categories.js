import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CategoryItem = ({ category }) => {
  const [open, setOpen] = useState(false);

  const hasSubcategories = category.subCategories?.length > 0;

  return (
    <li
      className="relative"
      onMouseEnter={() => hasSubcategories && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* MAIN CATEGORY */}
      <button
        onClick={() => hasSubcategories && setOpen((prev) => !prev)}
        className="flex items-center gap-11 text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
      >
        {category.name}
        {hasSubcategories && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* SUB CATEGORIES DROPDOWN */}
      {open && hasSubcategories && (
        <ul className="absolute left-0 top-full mt-0 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50">
          {category.subCategories.map((sub, index) => (
            <li
              key={sub.id}
              className={`px-4 py-3 hover:bg-red-50 hover:text-red-500 transition-colors ${
                index !== category.subCategories.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <Link
                to={`/category/${sub.slug}`}
                className="block text-gray-700 hover:text-red-500"
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
