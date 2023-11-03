import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
