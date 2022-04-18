import React, { FC } from "react";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";
import { Button, Status } from "../../UI";
import { CheckIcon } from "../../icons/CheckIcon";

interface PricingCardProps {
  price: string;
  licenseTerm: string;
  isOrange?: boolean;
}

export const PricingCard: FC<PricingCardProps> = ({
  price,
  licenseTerm,
  isOrange,
}) => {
  return (
    <Root isOrange={isOrange}>
      <PriceContainer isOrange={isOrange}>
        <Price>${price}</Price>
        <LicenseTerm>{licenseTerm}</LicenseTerm>
        <Text isOrange={isOrange}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Text>
      </PriceContainer>

      <CheckContainer>
        <Container>
          <Check>
            <StyledCheckIcon
              color={isOrange ? COLORS.Primari_1 : COLORS.Color_700}
            />
          </Check>
          <Description>Single site license</Description>
        </Container>

        <Container>
          <Check>
            <StyledCheckIcon
              color={isOrange ? COLORS.Primari_1 : COLORS.Color_700}
            />
          </Check>
          <Description>Special introductory pricing</Description>
        </Container>

        <Container>
          <Check>
            <StyledCheckIcon
              color={isOrange ? COLORS.Primari_1 : COLORS.Color_700}
            />
          </Check>
          <Description>Unlimited Pages and Keywords</Description>
        </Container>

        <Container>
          <Check>
            <StyledCheckIcon
              color={isOrange ? COLORS.Primari_1 : COLORS.Color_700}
            />
          </Check>
          <Description>Billed annually</Description>
        </Container>
      </CheckContainer>
      <StyledButton secondary isOrange={isOrange} text="Get Gscore" />
    </Root>
  );
};

const Root = styled.div<{ isOrange?: boolean }>`
  max-width: 404px;
  border-radius: 12px;
  padding: 42px 48px;
  background-color: ${({ isOrange }) =>
    isOrange ? COLORS.Primari_1 : COLORS.Color_700};
`;

const PriceContainer = styled.div<{ isOrange?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid
    ${({ isOrange }) => (isOrange ? COLORS.Color_100 : COLORS.Color_500)};
`;

const Price = styled.h2`
  font-size: 54px;
  color: ${COLORS.Color_100};
`;

const LicenseTerm = styled.p`
  font-size: 24px;
  text-align: center;
  color: ${COLORS.Color_100};
`;

const Text = styled.p<{ isOrange?: boolean }>`
  font-size: 18px;
  text-align: center;
  margin: 8px 0 40px;
  line-height: 2;
  color: ${({ isOrange }) => (isOrange ? COLORS.Color_100 : COLORS.Color_400)};
`;

const StyledButton = styled(Button)<{ isOrange?: boolean }>`
  max-width: 308px;
  text-align: start;
  white-space: nowrap;
  margin-top: 16px;
  font-size: 18px;
  padding: 26px 115px;
  color: ${({ isOrange }) => !isOrange && COLORS.Color_800};
`;

const CheckContainer = styled.div`
  width: 100%;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Check = styled.span`
  display: flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${COLORS.Color_100};
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 16px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-left: 14px;
  color: ${COLORS.Color_100};
`;
