import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Button from "../components/Button";
import Counter from "../components/Counter";

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  padding: 64px 0px;
  font-family: "Roboto";
`;

const Section = styled.section`
  margin-bottom: 64px;
`;

const MainSection = styled(Section)`
  display: flex;
`;

const InfoWrapper = styled.div`
  flex: 1;
  margin-left: 64px;
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

const ProductName = styled.h1`
  color: #333;
  margin-top: 0px;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #27ae60;
  margin: 0px;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #ddd;
`;

const Description = styled.p`
  line-height: 1.5em;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

type Props = {
  path: string;
};

const ProductDetail: FC<Props> = () => {
  const productsPerRow = 5;

  const relatedProducts = [...Array(productsPerRow)].map(() => ({
    id: uuid(),
    image: "https://via.placeholder.com/200x200?text=Dummy",
    name: "iPhone X 64GB - Elegant Black",
    price: 12000000,
    href: "/"
  }));

  const product = {
    name: "iPhone X 64GB - Elegant Black",
    price: 12000000,
    description: "This is iPhone X 64GB with color Elegant Black."
  };

  return (
    <div>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Header />
      <Wrapper>
        <MainSection>
          <Image src="https://via.placeholder.com/320x320" />
          <InfoWrapper>
            <ProductName>{product.name}</ProductName>
            <Price>{formatIDR.format(product.price)}</Price>
            <br />
            <br />
            <Counter onIncrement={console.log} onDecrement={console.log} />
            <br />
            <Button label="Add to Cart" />
          </InfoWrapper>
        </MainSection>
        <Section>
          <Title>Description</Title>
          <Description>{product.description}</Description>
        </Section>
        <Section>
          <Title>Related Products</Title>
          <ProductList>
            {relatedProducts.map(product => (
              <Product {...product} />
            ))}
          </ProductList>
        </Section>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default ProductDetail;
