import React, { FC } from "react";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  isDisabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  type,
  text,
  isDisabled,
  className,
  primary,
  secondary,
  onClick,
}) => {
  return (
    <Root
      primary={primary}
      secondary={secondary}
      className={className}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}>`
  max-width: 105px;
  padding: 20px 24px;
  font-size: 16px;
  border-radius: 4px;
  opacity: ${({ disabled }) => disabled && 0.6};
  color: ${({ primary }) => (primary ? COLORS.Color_100 : COLORS.Primari_1)};
  background-color: ${({ primary }) =>
    primary ? COLORS.Primari_1 : COLORS.Color_100};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? COLORS.Red_400 : COLORS.Color_100};
    color: ${({ secondary }) => secondary && COLORS.Red_400};
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px
      ${({ primary }) => (primary ? COLORS.Shadow_1 : COLORS.Shadow_2)};
    border-radius: 4px;
  }

  &:active {
    color: ${({ primary }) => (primary ? COLORS.Color_100 : COLORS.Primari_1)};
    background-color: ${({ primary }) =>
      primary ? COLORS.Primari_1 : COLORS.Color_100};
  }
`;
