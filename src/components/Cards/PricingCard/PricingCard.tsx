import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button } from "UI";
import { LicenseFeatures } from "./components";
import { TYPOGRAPHY } from "assets/styles/typography";

interface PricingCardProps {
  price: string;
  description: string;
  licenseTerm: string;
  features: string[];
  isSecondType?: boolean;
}

export const PricingCard: FC<PricingCardProps> = ({
  price,
  description,
  licenseTerm,
  features,
  isSecondType,
}) => {
  return (
    <Root $isSecondType={isSecondType}>
      <PriceContainer $isSecondType={isSecondType}>
        <Price>${price}</Price>
        <LicenseTerm>{licenseTerm}</LicenseTerm>
        <Text $isSecondType={isSecondType}>{description}</Text>
      </PriceContainer>

      <LicenseFeatures isSecondType={isSecondType} features={features} />

      <StyledButton
        $isSecondType={isSecondType}
        variant="secondary"
        text="Get Gscore"
      />
    </Root>
  );
};

const Root = styled.div<{ $isSecondType?: boolean }>`
  max-width: 404px;
  border-radius: 12px;
  padding: 36px 48px;
  background-color: ${({ $isSecondType }) =>
    $isSecondType ? COLORS.Primari_1 : COLORS.Color_700};
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

const LicenseTerm = styled.p`
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

const StyledButton = styled(Button)<{ $isSecondType?: boolean }>`
  max-width: 308px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  margin-top: 16px;
  font-size: 18px;
  padding: 26px;
  color: ${({ $isSecondType }) => !$isSecondType && COLORS.Color_800};
`;
