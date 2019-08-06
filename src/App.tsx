import React, { FC } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App: FC = () => (
  <div>
    <Router>
      <Home path="/" />
      <ProductDetail path="/product/:slug" />
    </Router>
  </div>
);

export default App;
