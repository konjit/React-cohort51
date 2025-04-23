import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Categories from "./components/Categories";
import Products from "./pages/Products";
import NoMatch from "./components/NoMatch";
import ProductDetail from "./components/ProductDetail";

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <h1 className="products-heading">Products</h1>
      <Categories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products selectedCategory={selectedCategory} />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
