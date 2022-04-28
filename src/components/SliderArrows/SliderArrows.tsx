import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { ArrowRightIcon, ArrowLeftIcon } from "icons";

interface SliderArrowsProps {
  cardNumber?: string;
  allCards?: string;
  className?: string;
  style: React.CSSProperties | undefined;
  onClick: () => void;
}

export const SliderArrows: FC<SliderArrowsProps> = ({
  cardNumber,
  allCards,
  className,
  style,
  onClick,
}) => {
  return (
    <ArrowButton
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", background: "red" }}
    >
      <ArrowRightIcon />
    </ArrowButton>
  );
};

const Root = styled.div`
  max-width: 160px;
  display: flex;
  align-items: center;
`;

const Counter = styled.div`
  display: flex;
  color: ${COLORS.Color_700};
`;

const CardNumber = styled.div`
  color: ${COLORS.Color_100};
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.Color_500};
  border-radius: 12px;
  width: 44px;
  height: 44px;
`;
