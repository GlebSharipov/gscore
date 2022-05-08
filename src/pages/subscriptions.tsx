import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import { CardLicense, Card, SliderCard } from "../components";
import { Button } from "../components/UI";
import { CloseIcon } from "icons";
import { SubscribesResponseType, CodeType } from "src/types";
import { subscribeSelf, codeActivate } from "src/services/requests";

const Subscriptions: NextPage = () => {
  const [subscribes, setSubscribes] = useState<SubscribesResponseType[]>([]);
  const [codes, setCodes] = useState<CodeType[]>([]);
  const numberOfСards = subscribes?.length;

  useEffect(() => {
    const data = async () => {
      const subscribes = await subscribeSelf();
      setSubscribes(subscribes);
    };
    data();
  }, []);

  const handleGetCodes = async (index: number) => {
    setCodes(subscribes[index].codes);
  };

  const handleCodeActivate = async (code: string) => {
    const { data } = await codeActivate(code);
    const newCodes = codes.map((code) => (code.id === data.id ? data : code));
    setCodes(newCodes);
  };

  return (
    <Root>
      {numberOfСards ? (
        <>
          <TitleContainer>
            <Title>My subscriptions</Title>
            <StyledButton text="Upgrade" variant="primary" />
          </TitleContainer>

          {subscribes.length == 1 ? (
            <CardContainer>
              {subscribes?.map((subscribe, index) => (
                <Card
                  key={subscribe.id}
                  onClick={() => handleGetCodes(index)}
                  price={subscribe.product.prices[0].price}
                  cardName={subscribe.product.name}
                />
              ))}
            </CardContainer>
          ) : (
            <SliderCard numberOfСards={numberOfСards}>
              {subscribes?.map((subscribe, index) => (
                <Card
                  key={subscribe.id}
                  onClick={() => handleGetCodes(index)}
                  price={subscribe.product.prices[0].price}
                  cardName={subscribe.product.name}
                />
              ))}
            </SliderCard>
          )}

          <LicenseContainer>
            {codes.map((code) => (
              <StyledCardLicense
                key={code.id}
                code={code.code}
                domain={code.origin}
                onClick={() => handleCodeActivate(code.code)}
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

const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  border-top: 1px solid ${COLORS.Color_700};
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
