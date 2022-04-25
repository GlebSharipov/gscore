import React, { FC } from "react";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";

interface StatusProps {
  isActive?: boolean;
  isHold?: boolean;
  isInactive?: boolean;
}

enum StatusText {
  ACTIVE = "Active",
  HOLD = "Hold",
  INACTIVE = "Inactive",
}

export const Status: FC<StatusProps> = ({ isActive, isHold, isInactive }) => {
  return (
    <Root isActive={isActive} isHold={isHold} isInactive={isInactive}>
      {isActive && StatusText.ACTIVE}
      {isHold && StatusText.HOLD}
      {isInactive && StatusText.INACTIVE}
    </Root>
  );
};

const Root = styled.h2<{
  isActive?: boolean;
  isHold?: boolean;
  isInactive?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: 58px;
  font-size: 22px;
  color: ${({ isActive, isHold, isInactive }) =>
    (isActive && COLORS.Green_300) ||
    (isHold && COLORS.Orange_300) ||
    (isInactive && COLORS.Red_300)};
`;
