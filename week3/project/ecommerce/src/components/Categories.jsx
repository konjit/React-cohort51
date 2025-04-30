import React from "react";

import Category from "./Category";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config";

import { useNavigate, useLocation } from "react-router-dom";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categoriesUrl = `${BASE_URL}products/categories`;
  
  const { data: categories } = useFetch(categoriesUrl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (category) => {
    setSelectedCategory(prev =>
      prev === category ? null : category
    );
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="categories">
      {categories?.map((category) => (
        <Category
          key={category}
          name={category}
          selectedCategory={selectedCategory}
          onClick={() => handleClick(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
