import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button } from "UI";
import { LicenseFeatures } from "./components";
import { TYPOGRAPHY } from "assets/styles/typography";
import { PriceType } from "src/types";

interface PricingCardProps {
  prices: PriceType[];
  sitesCount: number;
  secondType?: number;
  offset?: number;
  onClick?: () => void;
}

export const PricingCard: FC<PricingCardProps> = ({
  prices,
  sitesCount,
  secondType,
  offset,
  onClick,
}) => {
  return (
    <Root $offset={offset} $secondType={secondType}>
      <PriceContainer $secondType={secondType}>
        <Price>${prices[0].price}</Price>
        <LicenseTerm>{sitesCount} Site license</LicenseTerm>
        <Text $secondType={secondType}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Text>
      </PriceContainer>

      <LicenseFeatures secondType={secondType} sitesCount={sitesCount} />

      <StyledButton
        $secondType={secondType}
        variant="secondary"
        text="Get Gscore"
        onClick={onClick}
      />
    </Root>
  );
};

const Root = styled.div<{ $secondType?: number; $offset?: number }>`
  max-width: 404px;
  border-radius: 12px;
  padding: 42px 48px;
  transform: ${({ $offset }) => $offset == 2 && "translateY(-50px)"};
  background-color: ${({ $secondType }) =>
    $secondType == 2 ? COLORS.Primari_1 : COLORS.Color_700};

  @media (max-width: 1150px) {
    transform: translateY(0);
    margin-bottom: 12px;
  }

  @media (max-width: 1000px) {
    transform: translateY(0);
    margin-bottom: 12px;
  }

  @media (max-width: 430px) {
    padding: 20px 22px;
  }
`;

const PriceContainer = styled.div<{ $secondType?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid
    ${({ $secondType }) =>
      $secondType == 2 ? COLORS.Color_100 : COLORS.Color_500};
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

const Text = styled.p<{ $secondType?: number }>`
  font-size: 18px;
  text-align: center;
  word-break: break-all;
  margin: 8px 0 40px;
  ${TYPOGRAPHY.paragraph}
  color: ${({ $secondType }) =>
    $secondType == 2 ? COLORS.Color_100 : COLORS.Color_400};
`;

const StyledButton = styled(Button)<{ $secondType?: number }>`
  max-width: 308px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  margin-top: 16px;
  font-size: 18px;
  padding: 26px;
  color: ${({ $secondType }) => $secondType !== 2 && COLORS.Color_800};
`;
