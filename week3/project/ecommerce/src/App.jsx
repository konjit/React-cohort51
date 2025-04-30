import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";
import NoMatch from "./components/NoMatch";
import ProductDetail from "./components/ProductDetail";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import FavoritesPage from "./pages/FavoritesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (

    <FavoritesProvider>
  <BrowserRouter>
    <div className="app-container">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Products selectedCategory={selectedCategory} />}
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
</FavoritesProvider>

   
  );
};

export default App;
