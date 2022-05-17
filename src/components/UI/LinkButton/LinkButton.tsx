import React from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";

interface LinkButtonProps {
  className?: string;
  text: string;
  isSecondType?: boolean;
  onClick?: () => void;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, text, isSecondType, onClick }, ref) => {
    return (
      <Root
        onClick={onClick}
        className={className}
        $isSecondType={isSecondType}
      >
        <Link ref={ref}>{text}</Link>
      </Root>
    );
  }
);

LinkButton.displayName = "LinkButton";

const Root = styled.div<{ $isSecondType?: boolean }>`
  max-width: 310px;
  width: 100%;
  padding: 26px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  background-color: ${COLORS.Color_100};
  color: ${COLORS.Primary_1};

  color: ${({ $isSecondType }) => !$isSecondType && COLORS.Color_800};

  &:hover {
    color: ${COLORS.Red_400};
  }

  @media (max-width: 576px) {
    max-width: 360px;
  }
`;

const Link = styled.a`
  max-width: 310px;
  width: 100%;
  font-size: 18px;
`;
