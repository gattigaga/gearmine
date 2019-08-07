import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 136px;
  height: 36px;
  border: 1px solid #ccc;
  display: flex;
`;

const ButtonLeft = styled.button`
  width: 32px;
  height: 100%;
  border: 0px;
  border-right: 1px solid #ccc;
  background: #eee;
`;

const ButtonRight = styled(ButtonLeft)`
  border: 0px;
  border-left: 1px solid #ccc;
`;

const Input = styled.input`
  width: 72px;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  border: 0px;
`;

type Props = {
  defaultValue?: number;
  onDecrement?: (value: number) => void;
  onIncrement?: (value: number) => void;
};

const Counter: FC<Props> = ({ defaultValue, onDecrement, onIncrement }) => {
  const [value, setValue] = useState(defaultValue || 1);

  const increase = (step: number) => {
    setValue(prevValue => prevValue + step);
  };

  const add = () => {
    const incrementor = 1;
    const newValue = value + incrementor;

    increase(incrementor);
    onIncrement && onIncrement(newValue);
  };

  const substract = () => {
    const incrementor = value > 1 ? -1 : 0;
    const newValue = value + incrementor;

    value > 1 && increase(incrementor);
    onDecrement && onDecrement(newValue);
  };

  return (
    <Container>
      <ButtonLeft onClick={substract}>-</ButtonLeft>
      <Input type="text" min="1" value={value} />
      <ButtonRight onClick={add}>+</ButtonRight>
    </Container>
  );
};

export default Counter;
