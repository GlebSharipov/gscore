import React, { FC } from "react";
import Link from "next/link";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";

interface TabCreateAccountProps {
  href: string;
  title?: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const TabCreateAccount: FC<TabCreateAccountProps> = ({
  href,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <Root>
      <Link href={href}>
        <a>
          <Title>{title}</Title>
          <Line onClick={onClick} isSelected={isSelected} />
        </a>
      </Link>
    </Root>
  );
};

const Root = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  cursor: pointer;
  font-size: 20px;
  color: ${COLORS.Color_100};
`;

const Line = styled.div<{ isSelected: boolean }>`
  max-width: 195px;
  margin-top: 20px;
  padding: 4px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSelected ? COLORS.Primari_1 : COLORS.Color_100};
`;
