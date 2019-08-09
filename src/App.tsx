import React, { FC } from "react";
import { Router, navigate } from "@reach/router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ProductsByKeyword from "./pages/ProductsByKeyword";
import ProductsByCategory from "./pages/ProductsByCategory";

const App: FC = () => {
  const search = (keyword: string) => {
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div>
      <Header onSearch={search} />
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
        <ProductDetail path="/product/:slug" />
        <ProductsByKeyword path="/search" />
        <ProductsByCategory path="/category/:slug" />
      </Router>
    </div>
  );
};

export default App;
