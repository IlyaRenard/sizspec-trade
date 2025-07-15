import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDeatils from "./components/ProductDeatils";
import About from "./pages/About";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Information from "./pages/Information";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Header />
      </header>
      <div>
        <Routes>
          <Route path="/:id" element={<ProductDeatils />} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Information />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
