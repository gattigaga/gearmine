import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Button from "./Button";

const Container = styled.header`
  font-family: "Roboto";
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0px 64px;
  box-sizing: border-box;
  box-shadow: 1px 3px 3px rgba(64, 64, 64, 0.1);
`;

const Title = styled.h1`
  margin: 0px;
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 10px 12px;
  font-size: 13px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  &::placeholder {
    color: #888;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 8px;
`;

const Header: FC = () => {
  return (
    <Container>
      <StyledLink to="/">
        <Title>Gearmine</Title>
      </StyledLink>
      <Input type="search" value="" placeholder="Search product" />
      <Button label="Login" href="/login" isOutline />
      <StyledButton label="Register" href="/register" />
    </Container>
  );
};

export default Header;
