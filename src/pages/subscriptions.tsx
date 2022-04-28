import type { NextPage } from "next";

import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import { CardLicense, Card, SliderCard } from "../components";
import { Button } from "../components/UI";
import { pricingCardsData, cardsLicenseData } from "src/components/utils/mock";

const Subscriptions: NextPage = () => {
  const prices = pricingCardsData.map((card) => card.price);

  return (
    <Root>
      <TitleContainer>
        <Title>My subscriptions</Title>
        <StyledButton text="Upgrade" variant="primary" />
      </TitleContainer>

      <SliderCard>
        {prices.map((price) => (
          <Card key={price} price={price} />
        ))}
      </SliderCard>

      <LicenseContainer>
        {cardsLicenseData.map((card) => (
          <StyledCardLicense
            key={card.code}
            domain={card.domain}
            code={card.code}
          />
        ))}
      </LicenseContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 54px;
  color: ${COLORS.Color_100};
  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const StyledButton = styled(Button)`
  max-width: 152px;
  padding: 27px 20px;
`;

const LicenseContainer = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCardLicense = styled(CardLicense)`
  margin-bottom: 32px;
`;

export default Subscriptions;
