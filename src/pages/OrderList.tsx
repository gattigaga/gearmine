import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";

import Order from "../components/Order";

const Container = styled.div`
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  padding: 64px 0px;
  font-family: "Roboto";
`;

const Section = styled.section`
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-family: "Roboto";
  color: #333;
`;

const MainSection = styled.section`
  display: flex;
`;

const ItemList = styled.div`
  width: 65%;
`;

const CalculatedWrapper = styled.div`
  width: 35%;
  text-align: right;
  border-left: 1px solid #ddd;
  margin-left: 48px;
  padding-left: 48px;
  box-sizing: border-box;
`;

const TotalLabel = styled.p`
  font-size: 18px;
  color: #aaa;
  margin: 0px;
  margin-bottom: 4px;
`;

const TotalPrice = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0px;
`;

const Empty = styled.p`
  font-size: 14px;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

type Props = {
  path: string;
};

const OrderList: FC<Props> = () => {
  const [orders, setOrders] = useState(
    [...Array(3)].map((_, index) => ({
      id: uuid(),
      code: `F3ZSUFOS${index}`,
      date: "Jan 03, 2019 10:30",
      quantity: 2,
      status: "Waiting",
      totalPrice: 12000000,
      href: `/orders/F3ZSUFOS${index}`
    }))
  );

  return (
    <Container>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper>
        <Section>
          <Title>Order List</Title>
          {orders.map(order => (
            <Order key={order.id} {...order} />
          ))}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default OrderList;
