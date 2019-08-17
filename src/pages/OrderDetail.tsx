import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";

import MiniCart from "../components/MiniCart";
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
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: "Roboto";
  color: #833471;
  margin: 0px;
`;

const Status = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  color: #333;
  margin: 0px;
`;

const Line = styled.hr`
  border: 0px;
  border-top: 2px solid #333;
  margin-top: 12px;
`;

const InfoColumn = styled.div`
  width: 52%;
`;

const ProductColumn = styled.div`
  width: 40%;
`;

const PriceLabel = styled.p`
  font-size: 18px;
  text-align: right;
  color: #bbb;
  margin-top: 32px;
  margin-bottom: 4px;
`;

const TotalPrice = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: right;
  color: #333;
  margin-top: 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 12px 0px;
`;

const Label = styled.p`
  font-weight: bold;
  margin: 0px;
`;

const Value = styled.p`
  color: #888;
  margin: 0px;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

type Props = {
  path: string;
};

const OrderDetail: FC<Props> = () => {
  const [order, setOrder] = useState({
    id: uuid(),
    code: "F3ZSUFOS0",
    date: "Jan 03, 2019 10:30",
    status: "Waiting",
    totalPrice: 1200000,
    name: "Mark Zuckerberg",
    phone: "+101342355",
    province: "Jawa Timur",
    city: "Sidoarjo",
    subdistrict: "Candi",
    address: "Jl. Kenangan",
    zipCode: "324564",
    note: "I want to get free"
  });

  const [items, setItems] = useState(
    [...Array(3)].map(() => ({
      id: uuid(),
      image: "https://via.placeholder.com/200x200?text=Dummy",
      name: "iPhone X 64GB - Elegant Black",
      price: 12000000,
      href: "/",
      quantity: 1
    }))
  );

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper>
        <TitleWrapper>
          <Title>#{order.code}</Title>
          <Status>{order.status}</Status>
        </TitleWrapper>
        <Line />
        <br />
        <Section>
          <InfoColumn>
            <Row>
              <Label>Name</Label>
              <Value>{order.name}</Value>
            </Row>
            <Row>
              <Label>Phone</Label>
              <Value>{order.phone}</Value>
            </Row>
            <Row>
              <Label>Province</Label>
              <Value>{order.province}</Value>
            </Row>
            <Row>
              <Label>City</Label>
              <Value>{order.city}</Value>
            </Row>
            <Row>
              <Label>Subdistrict</Label>
              <Value>{order.subdistrict}</Value>
            </Row>
            <Row>
              <Label>Address</Label>
              <Value>{order.address}</Value>
            </Row>
            <Row>
              <Label>Zip Code</Label>
              <Value>{order.zipCode}</Value>
            </Row>
            <Row>
              <Label>Note</Label>
              <Value>{order.note}</Value>
            </Row>
          </InfoColumn>
          <ProductColumn>
            {items.map(item => (
              <MiniCart key={item.id} {...item} />
            ))}
            <PriceLabel>Total Price</PriceLabel>
            <TotalPrice>{formatIDR.format(totalPrice)}</TotalPrice>
          </ProductColumn>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default OrderDetail;
