import React, { FC } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "assets/constant/colors";

interface StatusProps {
  status: string;
}

enum StatusText {
  ACTIVE = "Active",
  HOLD = "Hold",
  INACTIVE = "Inactive",
}

const capitalizeFirstLetter = (value: string) => {
  const word = value.toLowerCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const Status: FC<StatusProps> = ({ status }) => {
  const statusText = capitalizeFirstLetter(status);

  return <Root $status={statusText}>{statusText}</Root>;
};

const rootColor = css<{ $status: string }>`
  color: ${({ $status }) => {
    switch ($status) {
      case StatusText.ACTIVE:
        return COLORS.Green_300;

      case StatusText.INACTIVE:
        return COLORS.Red_300;

      case StatusText.HOLD:
        return COLORS.Orange_300;
    }
  }};
`;

const Root = styled.h2`
  display: flex;
  align-items: center;
  min-height: 58px;
  font-size: 22px;
  ${rootColor}
`;
