import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import useFetch from "../hooks/useFetch";
import Loader from "./Loading";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const productUrl = `${BASE_URL}products/${id}`;
  const { data: product, loading, error } = useFetch(productUrl);

  return (
    <div className="product-detail">
      {error && <div className="error">{error}</div>}
      {loading && <Loader />}
      {product && (
        <div className="product-detail-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-rating">Rating: {product.rating?.rate} / 5</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
