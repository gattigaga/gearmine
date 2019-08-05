import React, { FC } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";

const App: FC = () => (
  <div>
    <Router>
      <Home path="/" />
    </Router>
  </div>
);

export default App;
