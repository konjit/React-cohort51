import React from "react";
import Product from "./Product";
import products from "../fake-data/all-products";

const Products = ({ selectedCategory }) => {
  const filteredProducts = !selectedCategory
    ? products
    : products.filter(
        (product) => product.category === selectedCategory.replace("FAKE: ", "")
      );

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
