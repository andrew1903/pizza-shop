import React from "react";

export const Categories = ({ activeCategory, setActiveCategory }) => {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Locked"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => setActiveCategory(index)}
            className={index === activeCategory ? "active" : undefined}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
