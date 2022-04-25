import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { CheckIcon } from "icons";

interface CheckboxProps {
  checked?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  isDisabled,
  onClick,
  ...props
}) => {
  return (
    <Root className={className} $isDisabled={isDisabled}>
      <CheckboxContainer>
        <HiddenCheckbox
          disabled={isDisabled}
          defaultChecked={checked}
          onClick={onClick}
          {...props}
        />
        <StyledCheckbox $defaultChecked={checked}>
          <StyledCheckIcon />
        </StyledCheckbox>
      </CheckboxContainer>
    </Root>
  );
};

const Root = styled.label<{ $isDisabled?: boolean }>`
  max-width: 30px;
  opacity: ${({ $isDisabled }) => $isDisabled && "0.5"};
`;

const CheckboxContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckIcon = styled(CheckIcon)`
  max-width: 20px;
`;

const HiddenCheckbox = styled.input.attrs<{ defaultChecked?: boolean }>({
  type: "checkbox",
})`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  &:disabled {
    + div:hover {
      background-color: ${({ defaultChecked }) =>
        defaultChecked ? COLORS.Primari_1 : COLORS.Color_200};
    }
  }
`;

const StyledCheckbox = styled.div<{ $defaultChecked?: boolean }>`
  padding: 2px 4px;
  background-color: ${({ $defaultChecked }) =>
    $defaultChecked ? COLORS.Primari_1 : COLORS.Color_100};
  border-radius: 7px;
  transition: all 150ms;

  &:hover {
    background-color: ${({ $defaultChecked }) =>
      $defaultChecked ? COLORS.Red_400 : COLORS.Color_400};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px
      ${({ $defaultChecked }) =>
        $defaultChecked ? COLORS.Shadow_1 : COLORS.Shadow_2};
  }

  ${StyledCheckIcon} {
    visibility: ${({ $defaultChecked }) =>
      $defaultChecked ? "visible" : "hidden"};
  }
`;
