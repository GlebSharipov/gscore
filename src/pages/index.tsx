import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import { PricingCard, TabCreateAccount } from "../components";
import { pricingCardsData } from "src/components/utils/mock";

interface HomeProps {
  userName?: string;
}

const Home: NextPage<HomeProps> = () => {
  const [authorization, setAuthorization] = useState(false);

  return (
    <>
      {authorization ? (
        <Container>
          <TabCreateAccount />
        </Container>
      ) : (
        <Root>
          <Title>Get started with Gscore today!</Title>

          <CardContainer>
            {pricingCardsData.map((card) => (
              <PricingCard
                isSecondType={card.isSecondType}
                key={card.licenseTerm}
                price={card.price}
                isOffset={card.offset}
                licenseTerm={card.licenseTerm}
                features={card.features}
                description={card.description}
                onClick={() => setAuthorization(true)}
              />
            ))}
          </CardContainer>

          <ContactUsContainer>
            <Text>Have more than 10 sites?</Text>
            <Link>Contact us</Link>
          </ContactUsContainer>
        </Root>
      )}
    </>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 44px;
  margin-bottom: 48px;
  color: ${COLORS.Color_100};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-bottom: 33px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.div`
  font-size: 18px;
  color: ${COLORS.Color_100};
`;

const Link = styled.a`
  cursor: pointer;
  color: ${COLORS.Primari_1};
  font-size: 18px;
  border-bottom: 1px solid ${COLORS.Primari_1};
`;

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;

const Container = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export default Home;
