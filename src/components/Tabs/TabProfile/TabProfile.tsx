import React, { FC } from "react";
import Link from "next/link";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";

interface TabProfileProps {
  href: string;
  title?: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const TabProfile: FC<TabProfileProps> = ({
  href,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <Root>
      <Link href={href}>
        <a>
          <Title onClick={onClick} isSelected={isSelected}>
            {title}
          </Title>
          <Line isSelected={isSelected} />
        </a>
      </Link>
    </Root>
  );
};

const Root = styled.div`
  max-width: 620px;
`;

const Title = styled.h2<{ isSelected: boolean }>`
  width: 100%;
  margin: 0 48px;
  font-size: 18px;
  color: ${(props) => (props.isSelected ? COLORS.Primari_1 : COLORS.Color_700)};
`;

const Line = styled.div<{ isSelected: boolean }>`
  width: 100%;
  margin-top: 12px;
  padding: 2px;
  background-color: ${(props) =>
    props.isSelected ? COLORS.Primari_1 : COLORS.Color_700};
`;
