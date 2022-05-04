import type { NextPage } from "next";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import { CardLicense, Card, SliderCard } from "../components";
import { Button } from "../components/UI";
import { pricingCardsData, cardsLicenseData } from "src/components/utils/mock";
import { CloseIcon } from "icons";

const Subscriptions: NextPage = () => {
  const prices = pricingCardsData.map((card) => card.price);
  const numberOfСards = prices.length;

  return (
    <Root>
      {prices ? (
        <>
          <TitleContainer>
            <Title>My subscriptions</Title>
            <StyledButton text="Upgrade" variant="primary" />
          </TitleContainer>

          <SliderCard numberOfСards={numberOfСards}>
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
        </>
      ) : (
        <>
          <Title>My subscriptions</Title>
          <Container>
            <ButtonCross>
              <CloseIcon />
            </ButtonCross>

            <Subtitle>No active subscriptions</Subtitle>

            <Description>
              You can subscribe right now by <br /> clicking on the button below
            </Description>

            <StyledButton text="Get Gscores" />
          </Container>
        </>
      )}
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
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
  }
`;

const StyledCardLicense = styled(CardLicense)`
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const ButtonCross = styled.button`
  background-color: ${COLORS.Color_700};
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 24px;

  &:hover {
    background-color: ${COLORS.Primari_1};
  }
`;

const Subtitle = styled.h2`
  font-size: 28px;
  color: ${COLORS.Color_100};
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 18px;
  color: ${COLORS.Color_100};
  text-align: center;
  margin-bottom: 32px;
`;

export default Subscriptions;
