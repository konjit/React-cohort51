import "../styles/Header.css";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { useFavorites } from "../contexts/FavoritesContext";
import { NavLink } from "react-router-dom";

// Put the categories and the link for products and favorites together made navbar
const Header = ({ selectedCategory, setSelectedCategory }) => {
  const { favorites } = useFavorites();

  return (
    <>
      <header>
        <h1 className="brand">Products</h1>

        <nav className="nav">
          <ul className="nav-bar">
            <li className="nav-link">
              <NavLink
                to="/"
                onClick={() => setSelectedCategory(null)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink
                to="/favorites"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Favorites{" "}
                {favorites.length > 0 && <sup>{favorites.length}</sup>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
};

export default Header;
