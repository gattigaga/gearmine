import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  width: 200px;
  font-family: "Roboto";
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 12px 8px;
`;

const Name = styled.p`
  color: #333;
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 12px;
  line-height: 1.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const Price = styled.p`
  color: #27ae60;
  font-size: 13px;
  font-weight: bold;
  margin: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

type Props = {
  image: string;
  name: string;
  price: number;
  href: string;
};

const Product: FC<Props> = ({ image, name, price, href }) => (
  <Container>
    <StyledLink to={href}>
      <Image src={image} alt={name} title={name} />
    </StyledLink>
    <Wrapper>
      <StyledLink to={href}>
        <Name>{name}</Name>
      </StyledLink>
      <Price>{formatIDR.format(price)}</Price>
    </Wrapper>
  </Container>
);

export default Product;
