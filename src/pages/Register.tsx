import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  background: red;
`;

type Props = {
  path: string;
};

const Register: FC<Props> = () => {
  return (
    <div>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper />
    </div>
  );
};

export default Register;
