import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 72px;
  background: #833471;
  font-family: "Roboto";
  display: flex;
`;

const Copyright = styled.p`
  color: white;
  margin: auto;
  font-size: 13px;
`;

const Footer: FC = () => (
  <Container>
    <Copyright>&copy; 2019 - 2019 Gearmine Ltd. All Rights Reserved.</Copyright>
  </Container>
);

export default Footer;
