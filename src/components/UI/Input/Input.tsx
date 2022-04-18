import React, { FC, useState } from "react";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";
import { CheckIcon, CloseIcon } from "../../icons";

interface InputProps {
  className?: string;
  isDisabled?: boolean;
  placeholder?: string;
  isSuccess?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  placeholder,
  className,
  isDisabled,
  isSuccess,
  value,
  onChange,
  ...props
}) => {
  return (
    <Root>
      <StyledInput
        isSuccess={isSuccess}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        className={className}
        autoFocus
        placeholder={placeholder}
        {...props}
      />

      {value ? (
        <ButtonContainer>
          <CheckIcon color={COLORS.Green_300} />
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <CloseIcon color={COLORS.Red_300} />
        </ButtonContainer>
      )}
    </Root>
  );
};

const Root = styled.form`
  position: relative;
  max-width: 419px;
`;

const StyledInput = styled.input<{ disabled?: boolean; isSuccess?: boolean }>`
  width: 100%;
  padding: 25px 23px;
  font-size: 16px;
  border-radius: 6px;
  background-color: ${COLORS.Color_100};
  opacity: ${({ disabled }) => disabled && 0.6};
  border: 1px solid
    ${({ isSuccess }) => (isSuccess ? COLORS.Green_300 : COLORS.Red_300)};
`;

const ButtonContainer = styled.button`
  position: absolute;
  right: 20px;
  top: 22px;
  max-width: 20px;
`;
