import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  margin: 0px 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Name = styled.p`
  color: #333;
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 8px;
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
  margin-bottom: 16px;
`;

const TotalPrice = styled(Price)`
  text-align: right;
  font-size: 14px;
  color: #333;
`;

const Quantity = styled.span`
  font-weight: normal;
  color: #333;
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
  quantity: number;
  href?: string;
};

const MiniCart: FC<Props> = ({ image, name, price, quantity, href }) => (
  <Container>
    <StyledLink to={href}>
      <Image src={image} alt={name} title={name} />
    </StyledLink>
    <Info>
      <StyledLink to={href}>
        <Name>{name}</Name>
      </StyledLink>

      <Price>
        {formatIDR.format(price)} <Quantity>x {quantity}</Quantity>
      </Price>
    </Info>
    <TotalPrice>{formatIDR.format(price * quantity)}</TotalPrice>
  </Container>
);

export default MiniCart;
