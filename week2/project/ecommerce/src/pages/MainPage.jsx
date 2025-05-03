
import Categories from "../components/Categories";
import Products from "./Products";
import { useState } from "react";
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

  export default MainPage