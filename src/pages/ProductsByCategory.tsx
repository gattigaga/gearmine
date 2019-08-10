import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";

import Product from "../components/Product";

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  display: flex;
  padding: 32px 0px;
`;

const Section = styled.section`
  margin-bottom: 64px;
`;

const Info = styled.p`
  font-family: "Roboto";
  color: #333;
  margin-top: 0px;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-gap: 20px;
`;

type Props = {
  path: string;
};

const ProductsByCategory: FC<Props> = () => {
  const productsPerRow = 5;

  const products = [...Array(productsPerRow * 3)].map(() => ({
    id: uuid(),
    image: "https://via.placeholder.com/200x200?text=Dummy",
    name: "iPhone X 64GB - Elegant Black",
    price: 12000000,
    href: "/"
  }));

  return (
    <div>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper>
        <Section>
          <Info>
            There is <strong>15.323</strong> items in category{" "}
            <strong>"Smartphone"</strong>
          </Info>
          <ProductWrapper>
            {products.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </ProductWrapper>
        </Section>
      </Wrapper>
    </div>
  );
};

export default ProductsByCategory;
