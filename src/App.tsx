import React, { FC } from "react";
import { Router } from "@reach/router";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ProductsByKeyword from "./pages/ProductsByKeyword";
import ProductsByCategory from "./pages/ProductsByCategory";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Main path="/">
          <Home path="/" />
          <Cart path="/cart" />
          <ProductDetail path="/product/:slug" />
          <ProductsByKeyword path="/search" />
          <ProductsByCategory path="/category/:slug" />
        </Main>
        <Register path="/register" />
        <Login path="/login" />
      </Router>
    </div>
  );
};

export default App;
