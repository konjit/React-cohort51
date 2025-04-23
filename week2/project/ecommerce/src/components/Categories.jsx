import React from "react";

import Category from "./Category";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config";

import "../styles/Categories.css";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const categoriesUrl = `${BASE_URL}products/categories`;
  const { data: categories, error } = useFetch(categoriesUrl);

  return (
    <>
      {error && <div className="error-container">{`${error} categories.`}</div>}
      <div className="categories">
        {categories &&
          categories.map((category) => (
            <Category
              key={category}
              name={category}
              selectedCategory={selectedCategory}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            />
          ))}
      </div>
    </>
  );
};

export default Categories;
