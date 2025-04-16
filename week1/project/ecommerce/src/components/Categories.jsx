import React from "react";
import categories from "../fake-data/all-categories";
import Category from "./Category";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const handleSubmit = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="categories">
        {categories.map((category) => (
          <Category
            key={category}
            name={category}
            selectedCategory={selectedCategory}
            onClick={() => handleSubmit(category)}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
