import React from "react";
import Product from "./Product";
import products from "../fake-data/all-products";

const Products = ({ selectedCategory }) => {
  return (
    <div className="products">
      {
        selectedCategory === null
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : products
            .filter(
              (product) => product.category === selectedCategory.replace("FAKE: ", "")
            )
            .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
