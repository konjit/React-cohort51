import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NoMatch from "./components/NoMatch";
import ProductDetail from "./components/ProductDetail";


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
