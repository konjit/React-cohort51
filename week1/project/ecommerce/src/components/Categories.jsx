import React from "react";
import categories from "../fake-data/all-categories";
import Category from "./Category";

const Categories = ({ setSelectedCategory, selectedCategory }) => {

  return (
    <>
      <div className="categories">
        {categories.map((category) => (
          <Category
            key={category}
            name={category}
            selectedCategory={selectedCategory}
            onClick={() =>
              setSelectedCategory(selectedCategory === category ? null : category)
            }
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
