import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="products-item">
        <div className="product">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <span className="product-title">{product.title}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
