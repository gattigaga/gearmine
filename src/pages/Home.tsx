import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import uuid from "uuid/v4";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
`;

const StyledCarousel = styled(Carousel)`
  margin: 32px 0px;
  margin-bottom: 64px;
  font-family: "Roboto";
  font-size: 12px;
`;

const Section = styled.section`
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-family: "Roboto";
  color: #333;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-gap: 20px;
`;

type Props = {
  path: string;
};

const Home: FC<Props> = () => {
  const productsPerRow = 5;

  const bestSellingProducts = [...Array(productsPerRow)].map(() => ({
    id: uuid(),
    image: "https://via.placeholder.com/200x200?text=Dummy",
    name: "iPhone X 64GB - Elegant Black",
    price: 12000000,
    href: "/"
  }));

  const recommendedProducts = [...Array(productsPerRow * 3)].map(() => ({
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
      <Header />
      <Wrapper>
        <StyledCarousel>
          <img src="https://via.placeholder.com/1080x400?text=Dummy%201" />
          <img src="https://via.placeholder.com/1080x400?text=Dummy%202" />
          <img src="https://via.placeholder.com/1080x400?text=Dummy%203" />
          <img src="https://via.placeholder.com/1080x400?text=Dummy%204" />
          <img src="https://via.placeholder.com/1080x400?text=Dummy%205" />
        </StyledCarousel>
        <Section>
          <Title>Best Selling</Title>
          <ProductList>
            {bestSellingProducts.map(product => (
              <Product {...product} />
            ))}
          </ProductList>
        </Section>
        <Section>
          <Title>Recommended Products</Title>
          <ProductList>
            {recommendedProducts.map(product => (
              <Product {...product} />
            ))}
          </ProductList>
        </Section>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
