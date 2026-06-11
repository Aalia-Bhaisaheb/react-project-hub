import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;