import React from "react";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config.js";
import Loader from "../components/Loading";
import "../styles/Products.css";
import { useEffect } from "react";

const Products = ({ selectedCategory }) => {
  const category = selectedCategory?.replace("FAKE: ", "");
  const productsUrl = category
    ? `${BASE_URL}products/category/${category}`
    : `${BASE_URL}products/`;

  const { data: products, loading, error, setUrl } = useFetch(productsUrl);

  useEffect(() => {
    setUrl(productsUrl);
  }, [productsUrl, setUrl]);

  return (
    <>
      {loading && <Loader />}
      {error && <div>{error} products</div>}
      <div className="products">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
