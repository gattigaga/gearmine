import React, { FC } from "react";
import { navigate } from "@reach/router";

import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  path: string;
};

const Main: FC<Props> = ({ children }) => {
  const search = (keyword: string) => {
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div>
      <Header onSearch={search} />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
