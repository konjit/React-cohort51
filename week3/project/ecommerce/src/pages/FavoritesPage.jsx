import Product from "../components/Product";
import { useFavorites } from "../contexts/FavoritesContext";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loading";
import { BASE_URL } from "../config";
import "../styles/FavoritesPage.css"

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  
  // Since we only have the ids from the context we need to fetch them again from 
  // the api.
  const favoriteUrls = favorites.map((id) => `${BASE_URL}products/${id}`);
  const { data: favoriteProducts, loading, error } = useFetch(favoriteUrls);

  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <div className="products">
        {favoriteProducts?.length === 0 ? (
           <div className="no-fav">
           <h2>No favorite products found</h2>
           
         </div>
        ) : (
          favoriteProducts
            ?.filter((product) => favorites.includes(product.id))
            .map((product) => (
              <Product key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
