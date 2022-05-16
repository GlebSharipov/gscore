import React, { FC } from "react";
import NextLink from "next/link";
import { COLORS } from "src/constant";
import styled from "styled-components";
import { CloseIcon } from "icons";

interface LinkButtonProps {
  className?: string;
  text?: string;
  isSecondType?: boolean;
  variant: "primary" | "cross";
  isCross?: boolean;
  link: string;
}

export const LinkButton: FC<LinkButtonProps> = ({
  className,
  text,
  variant,
  isCross,
  link,
}) => {
  return (
    <Root href={`${link}`} passHref>
      <Link $variant={themes[variant]} className={className}>
        {isCross ? <CloseIcon /> : text}
      </Link>
    </Root>
  );
};

const themes = {
  primary: () => ` 
  background-color: ${COLORS.Primary_1};
  color: ${COLORS.Color_100};
  
  @media (max-width: 576px) {
    max-width: 360px;
  }

  &:hover {
    background-color:  ${COLORS.Red_400};
  }
 
  `,

  cross: () => `
  background-color: ${COLORS.Color_700};
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 24px;

  &:hover {
    background-color: ${COLORS.Primary_1};
  }
  `,
};

const Link = styled.a<{ $variant: () => string }>`
  cursor: pointer;
  max-width: 164px;
  width: 100%;
  padding: 26px;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  ${({ $variant }) => $variant}
`;

const Root = styled(NextLink)`
  max-width: 620px;
  width: 100%;
`;
