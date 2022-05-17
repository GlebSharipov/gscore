import React, { ButtonHTMLAttributes } from "react";
import { COLORS } from "src/constant";
import styled from "styled-components";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "text";
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { text, isDisabled, className, variant = "primary", isLoading, onClick },
    ref
  ) => {
    return (
      <Root
        ref={ref}
        className={className}
        $variant={themes[variant]}
        $isDisabled={isDisabled}
        disabled={isDisabled}
        onClick={onClick}
      >
        {isLoading ? (
          <ClipLoader loading={isLoading} css={override} size={20} />
        ) : (
          <>{text}</>
        )}
      </Root>
    );
  }
);

Button.displayName = "Button";

const override = css`
  display: block;
  margin: 0 auto;
`;

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
  background-color: ${COLORS.Primary_1};
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
  background-color: ${COLORS.Color_100};
  color: ${COLORS.Primary_1};
  &:not([disabled]):hover {
   color: ${COLORS.Red_400};
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${COLORS.Shadow_2};
    border-radius: 4px;
  }
  `,

  text: () => `
  color: ${COLORS.Primary_1};
  &:not([disabled]):hover{
    color: ${COLORS.Red_400};
  }
  `,
};
