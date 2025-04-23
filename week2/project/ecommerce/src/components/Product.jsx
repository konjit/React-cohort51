import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

const Product = ({ product }) => {
  const { id, image, title } = product;
  return (
    <>
      <div className="products-item">
        <Link to={`products/${id}`}>
          <div className="product">
            <img className="product-image" src={image} alt={title} />
            <span className="product-title">{title}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
