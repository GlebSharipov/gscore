import React, { FC } from "react";
import { COLORS } from "src/constant";
import styled from "styled-components";

interface SliderButtonProps {
  children: React.ReactNode;
  isNextButton?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const SliderButton: FC<SliderButtonProps> = ({
  children,
  isNextButton,
  isDisabled,
  onClick,
}) => {
  return (
    <Root
      $isDisabled={isDisabled}
      $isNextButton={isNextButton}
      onClick={onClick}
    >
      {children}
    </Root>
  );
};

const Root = styled.button<{ $isDisabled?: boolean; $isNextButton?: boolean }>`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -70px;
  left: ${({ $isNextButton }) => $isNextButton && "100px"};
  border: 1px solid ${COLORS.Color_500};
  border-radius: 12px;
  width: 44px;
  height: 44px;
  opacity: ${({ $isDisabled }) => $isDisabled && 0.6};

  &:hover {
    background-color: ${COLORS.Primary_1};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
