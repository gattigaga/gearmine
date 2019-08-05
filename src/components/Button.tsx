import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

type ButtonStyleProps = {
  isOutline?: boolean;
  isFullWidth?: boolean;
};

const Container = styled.button<ButtonStyleProps>`
  background: ${({ isOutline }) => (isOutline ? "white" : "#833471")};
  border: 1px solid #833471;
  color: ${({ isOutline }) => (isOutline ? "#833471" : "white")};
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 4px;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

const StyledLink = styled(Link)<ButtonStyleProps>`
  background: ${({ isOutline }) => (isOutline ? "white" : "#833471")};
  border: 1px solid #833471;
  color: ${({ isOutline }) => (isOutline ? "#833471" : "white")};
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 4px;
  text-decoration: none;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

type Props = {
  className?: string;
  label: string;
  href?: string;
  onClick?: () => void;
  isOutline?: boolean;
  isFullWidth?: boolean;
};

const Button: FC<Props> = ({
  className,
  label,
  href,
  onClick,
  isOutline,
  isFullWidth
}) =>
  href ? (
    <StyledLink
      className={className}
      to={href}
      onClick={onClick}
      isOutline={isOutline}
      isFullWidth={isFullWidth}
    >
      {label}
    </StyledLink>
  ) : (
    <Container
      className={className}
      onClick={onClick}
      isOutline={isOutline}
      isFullWidth={isFullWidth}
    >
      {label}
    </Container>
  );

export default Button;
