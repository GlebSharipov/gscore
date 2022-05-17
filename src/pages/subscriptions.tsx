import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "src/constant";
import { CardLicense, Card, SliderCard } from "../components";
import { upgradeProduct } from "src/store/ducks/product";
import { useAppDispatch } from "src/store/store";
import { useRouter } from "next/router";
import { Button, LinkButton } from "UI";
import { SubscribesResponseType, CodeType } from "src/types";
import {
  getSubscriptions,
  codeActivate,
  saveCode,
} from "src/services/requests";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { ROUTES } from "src/constant";

const Subscriptions: NextPage = () => {
  const [subscribes, setSubscribes] = useState<SubscribesResponseType[]>([]);
  const [codes, setCodes] = useState<CodeType[]>([]);
  const [productId, setProductId] = useState(0);
  const [subscribeId, setSubscribeId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [codesIdsToSave, setCodesIdsToSave] = useState<number[]>([]);

  const numberOfСards = subscribes?.length;
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    getSubscriptions()
      .then((res) => setSubscribes(res.data))
      .finally(() => setIsLoading(false));
  }, [codes]);

  const handleUpgrade = () => {
    dispatch(upgradeProduct({ productId, subscribeId }));
    router.push(ROUTES.HOME);
  };

  const handleGetCodes = (index: number) => {
    const codes = subscribes[index].codes;
    setCodes(codes);
  };

  const handleCodeActivate = (code: string) => {
    codeActivate(code)
      .then((res) => {
        const newCodes = codes.map((codeInfo) =>
          codeInfo.id === res.data.id ? res.data : codeInfo
        );
        setCodes(newCodes);
        toast("Code activated successfully");
      })
      .catch((error) => toast(error.response.data.message));
  };

  const handleChecked = (codeId: number) => {
    if (codesIdsToSave.includes(codeId)) {
      const newArray = codesIdsToSave.filter((id) => id !== codeId);
      setCodesIdsToSave(newArray);
    } else {
      setCodesIdsToSave([...codesIdsToSave, codeId]);
    }
  };

  const handleSaveCodes = () => {
    if (codesIdsToSave.length) {
      saveCode({ codesIds: codesIdsToSave, subscribeId })
        .then((res) => setCodes(res.data))
        .catch((error) => toast(error.response.data.message));
    }
  };

  const handleGetProductInformation = (index: number = 0) => {
    handleGetCodes(index);
    setProductId(subscribes[index].productId);
    setSubscribeId(subscribes[index].codes[0].subscribeId);
  };

  return (
    <Root>
      {numberOfСards ? (
        <>
          <TitleContainer>
            <Title>My subscriptions</Title>
            <StyledButton
              onClick={handleUpgrade}
              text="Upgrade"
              variant="primary"
            />
          </TitleContainer>

          {subscribes.length === 1 ? (
            <CardContainer>
              <Card
                key={subscribes[0].id}
                onClick={() => handleGetProductInformation()}
                status={subscribes[0].status}
                price={subscribes[0].product.prices[0].price}
                cardName={subscribes[0].product.name}
              />
            </CardContainer>
          ) : (
            <SliderCard numberOfСards={numberOfСards}>
              {subscribes?.map((subscribe, index) => (
                <Card
                  key={subscribe.id}
                  onClick={() => handleGetProductInformation(index)}
                  status={subscribe.status}
                  price={subscribe.product.prices[0].price}
                  cardName={subscribe.product.name}
                />
              ))}
            </SliderCard>
          )}

          <LicenseContainer>
            {codes.map((codeInfo) => (
              <StyledCardLicense
                key={codeInfo.id}
                code={codeInfo.code}
                domain={codeInfo.origin}
                status={codeInfo.status}
                onCodeActivate={() => handleCodeActivate(codeInfo.code)}
                onClickCheckbox={() => handleChecked(codeInfo.id)}
              />
            ))}
          </LicenseContainer>

          {codesIdsToSave.length && (
            <SelectDomains>
              <Text>Select the domains you want to keep</Text>
              <StyledButton
                onClick={handleSaveCodes}
                text="Сonfirm"
                variant="primary"
              />
            </SelectDomains>
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <ClipLoader loading={isLoading} css={override} size={150} />
          ) : (
            <>
              <Title>My subscriptions</Title>
              <Container>
                <LinkButton link={ROUTES.HOME} variant="cross" isCross />

                <Subtitle>No active subscriptions</Subtitle>

                <Description>
                  You can subscribe right now by <br /> clicking on the button
                  below
                </Description>

                <LinkButton
                  link={ROUTES.HOME}
                  variant="primary"
                  text="Get Gscores"
                />
              </Container>
            </>
          )}
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

const SelectDomains = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 20px;
  color: ${COLORS.Color_100};
`;

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  border-color: ${COLORS.Primary_1};
`;

const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
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
    background-color: ${COLORS.Primary_1};
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
