import React, { FC } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "src/constant";
import { capitalizeFirstLetter } from "src/helpers";

interface StatusProps {
  status: string;
}

enum StatusText {
  ACTIVE = "Active",
  HOLD = "Hold",
  INACTIVE = "Inactive",
}

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
