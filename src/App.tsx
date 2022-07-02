import Store from "./Components/Store";

import Product from "./Components/Product";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const StoreView = <Store />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={StoreView} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={"About Page"} />
        <Route path="*" element={"Error Page"} />
      </Routes>
    </Router>
  );
}
