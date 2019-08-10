import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";

import CartItem from "../components/CartItem";
import Button from "../components/Button";

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

const Cart: FC<Props> = () => {
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

  const updateQty = (id: string) => (quantity: number) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity };
        }

        return item;
      });
    });
  };

  const removeItem = (id: string) => () => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <Container>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper>
        <Section>
          <Title>Cart</Title>
          <MainSection>
            <ItemList>
              {!items.length && (
                <Empty>
                  There's no products here. You should buy at least one.
                </Empty>
              )}
              {items.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onIncrement={updateQty(item.id)}
                  onDecrement={updateQty(item.id)}
                  onClickClose={removeItem(item.id)}
                />
              ))}
            </ItemList>
            <CalculatedWrapper>
              <TotalLabel>Total Price</TotalLabel>
              <TotalPrice>{formatIDR.format(totalPrice)}</TotalPrice>
              <br />
              <br />
              <Button label="Proceed to Checkout" href="/checkout" />
            </CalculatedWrapper>
          </MainSection>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Cart;
