import React, { FC, ButtonHTMLAttributes } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  isDisabled,
  className,
  variant = "primary",
  onClick,
}) => {
  return (
    <Root
      className={className}
      $variant={themes[variant]}
      $isDisabled={isDisabled}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </Root>
  );
};

const Root = styled.button<{
  $variant: () => string;
  $isDisabled?: boolean;
}>`
  max-width: 120px;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  border-radius: 4px;
  opacity: ${({ $isDisabled }) => $isDisabled && 0.6};
  ${({ $variant }) => $variant}
`;

const themes = {
  primary: () => `
  background-color: ${COLORS.Primari_1};
  color: ${COLORS.Color_100};
  &:not([disabled]):hover {
    background-color:  ${COLORS.Red_400};
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${COLORS.Shadow_1};
    border-radius: 4px;
  }
  `,

  secondary: () => `
  background-color: ${COLORS.Color_100}};
  color: ${COLORS.Primari_1};
  &:not([disabled]):hover {
   color: ${COLORS.Red_400};
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${COLORS.Shadow_2};
    border-radius: 4px;
  }
  `,

  text: () => `
  color: ${COLORS.Primari_1};
  &:not([disabled]):hover{
    color: ${COLORS.Red_400};
  }
  `,
};
