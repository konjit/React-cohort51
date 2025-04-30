import { Link } from "react-router-dom";
import "../styles/Product.css";
import heart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";
import { useFavorites } from "../contexts/FavoritesContext";

const Product = ({ product }) => {
  const { id, image, title } = product;
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div className="products-item">
      <Link to={`/products/${id}`}>
        <div className="product">
          <div className="img-container">
            <img className="product-image" src={image} alt={title} />
            <div className="fav-icon-container" onClick={handleToggle}>
              <img
                className="fav-icon"
                src={isFavorite(id) ? solidHeart : heart}
                alt="heart"
              />
            </div>
          </div>
          <span className="product-title">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
