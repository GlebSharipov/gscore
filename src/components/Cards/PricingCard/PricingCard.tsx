import React, { FC } from "react";
import Link from "next/link";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { LinkButton } from "UI";
import { LicenseFeatures } from "./components";
import { TYPOGRAPHY } from "assets/styles/typography";
import { PriceType } from "src/types";

interface PricingCardProps {
  prices: PriceType[];
  sitesCount: number;
  isSecondType?: boolean;
  tabId?: number;
  onClick?: () => void;
}

export const PricingCard: FC<PricingCardProps> = ({
  prices,
  sitesCount,
  isSecondType,
  tabId,
  onClick,
}) => {
  return (
    <Root $isSecondType={isSecondType}>
      <PriceContainer $isSecondType={isSecondType}>
        <Price>${prices[0].price}</Price>
        <LicenseTerm>{sitesCount} Site license</LicenseTerm>
        <Text $isSecondType={isSecondType}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Text>
      </PriceContainer>

      <LicenseFeatures isSecondType={isSecondType} sitesCount={sitesCount} />

      <Link href={`/authorization/${tabId}`} passHref>
        <LinkButton
          isSecondType={isSecondType}
          text="Get Gscore"
          onClick={onClick}
        />
      </Link>
    </Root>
  );
};

const Root = styled.div<{ $isSecondType?: boolean }>`
  max-width: 404px;
  border-radius: 12px;
  padding: 42px 48px;
  transform: ${({ $isSecondType }) => $isSecondType && "translateY(-50px)"};
  background-color: ${({ $isSecondType }) =>
    $isSecondType ? COLORS.Primary_1 : COLORS.Color_700};

  @media (max-width: 1200px) {
    transform: translateY(0);
    margin-bottom: 12px;
  }

  @media (max-width: 992px) {
    transform: translateY(0);
    margin-bottom: 12px;
  }

  @media (max-width: 576px) {
    padding: 20px 26px;
  }
`;

const PriceContainer = styled.div<{ $isSecondType?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid
    ${({ $isSecondType }) =>
      $isSecondType ? COLORS.Color_100 : COLORS.Color_500};
`;

const Price = styled.h2`
  font-size: 54px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.price}
`;

const LicenseTerm = styled.div`
  font-size: 24px;
  text-align: center;
  word-break: break-all;
  color: ${COLORS.Color_100};
`;

const Text = styled.p<{ $isSecondType?: boolean }>`
  font-size: 18px;
  text-align: center;
  word-break: break-all;
  margin: 8px 0 40px;
  ${TYPOGRAPHY.paragraph}
  color: ${({ $isSecondType }) =>
    $isSecondType ? COLORS.Color_100 : COLORS.Color_400};
`;
