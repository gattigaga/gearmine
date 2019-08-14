import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.footer`
  width: 100%;
  border: 1px solid #ddd;
  font-family: "Roboto";
  padding: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Code = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 16px;
  margin: 0px;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

type Props = {
  code: string;
  quantity: number;
  totalPrice: number;
  href?: string;
  status: string;
  date: string;
};

const Order: FC<Props> = ({
  code,
  quantity,
  totalPrice,
  href,
  status,
  date
}) => (
  <StyledLink to={href}>
    <Container>
      <Code>#{code}</Code>
      <Text>Qty: {quantity}</Text>
      <Text>{formatIDR.format(totalPrice)}</Text>
      <Text>{status}</Text>
      <Text>{date}</Text>
    </Container>
  </StyledLink>
);

export default Order;
