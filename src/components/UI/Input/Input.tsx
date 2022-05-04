import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { CheckIcon, CloseIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isDisabled?: boolean;
  placeholder?: string;
  value?: string;
  variant: "success" | "error" | "initial";
}

const themes = {
  initial: () => `
  border: 1px solid;
  `,

  success: () => `
  border: 1px solid ${COLORS.Green_300};
  `,

  error: () => `
  border: 1px solid ${COLORS.Red_300};
  `,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, isDisabled, value, variant, ...props }, ref) => {
    return (
      <Root className={className}>
        <StyledInput
          ref={ref}
          $isDisabled={isDisabled}
          $variant={themes[variant]}
          disabled={isDisabled}
          value={value}
          className={className}
          autoFocus
          placeholder={placeholder}
          {...props}
        />

        {variant == "success" && (
          <ButtonContainer>
            <CheckIcon color={COLORS.Green_300} />
          </ButtonContainer>
        )}

        {variant == "error" && (
          <ButtonContainer>
            <CloseIcon color={COLORS.Red_300} />
          </ButtonContainer>
        )}
      </Root>
    );
  }
);

Input.displayName = "Input";

const Root = styled.div`
  position: relative;
  max-width: 512px;
  margin-bottom: 24px;
`;

const StyledInput = styled.input<{
  $isDisabled?: boolean;
  $variant?: () => string;
}>`
  ${TYPOGRAPHY.text_single}
  width: 100%;
  padding: 25px 23px;
  font-size: 16px;
  border-radius: 6px;
  background-color: ${COLORS.Color_100};
  opacity: ${({ $isDisabled }) => $isDisabled && 0.6};
  ${({ $variant }) => $variant}
`;

const ButtonContainer = styled.button`
  position: absolute;
  right: 20px;
  top: 25px;
  max-width: 30px;
  &:hover {
    border-radius: 50%;
    background-color: ${COLORS.Color_400};
  }
`;
