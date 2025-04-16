import React, { useState } from "react";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <h1 className="products-heading">Products</h1>
      <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <Products selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
