import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Counter from "../components/Counter";

const Container = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
`;

const Image = styled.img`
  width: 96px;
  height: 96px;
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
  margin-bottom: 16px;
`;

const TotalPrice = styled(Price)`
  text-align: right;
  font-size: 24px;
  color: #333;
  margin-top: 16px;
  margin-right: 16px;
`;

const Close = styled.button`
  width: 32px;
  height: 32px;
  font-size: 24px;
  background: none;
  border: 0px;
  color: #aaa;
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
  onDecrement?: (value: number) => void;
  onIncrement?: (value: number) => void;
  onClickClose?: () => void;
};

const CartItem: FC<Props> = ({
  image,
  name,
  price,
  quantity,
  href,
  onDecrement,
  onIncrement,
  onClickClose
}) => (
  <Container>
    <StyledLink to={href}>
      <Image src={image} alt={name} title={name} />
    </StyledLink>
    <Info>
      <StyledLink to={href}>
        <Name>{name}</Name>
      </StyledLink>
      <Price>{formatIDR.format(price)}</Price>
      <Counter
        defaultValue={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </Info>
    <TotalPrice>{formatIDR.format(price * quantity)}</TotalPrice>
    <Close onClick={onClickClose}>&times;</Close>
  </Container>
);

export default CartItem;
