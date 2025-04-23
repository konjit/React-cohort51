import React from "react";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config.js";
import Loader from "../components/Loading";
import "../styles/Products.css";

const Products = ({ selectedCategory }) => {
  const category = selectedCategory?.replace("FAKE: ", "");

  const productsUrl = category
    ? `${BASE_URL}products/category/${category}`
    : `${BASE_URL}products/`;

  const { data: products, error, loading } = useFetch(productsUrl);

  return (
    <>
      {loading && <Loader />}
      {error && <div className="error-container">{`${error} products.`}</div>}
      <div className="products">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Products;
