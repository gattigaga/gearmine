import React, { FC } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App: FC = () => (
  <div>
    <Router>
      <Home path="/" />
      <Cart path="/cart" />
      <ProductDetail path="/product/:slug" />
    </Router>
  </div>
);

export default App;
