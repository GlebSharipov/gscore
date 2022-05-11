import React, { FC, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button } from "UI";
import { ShoppingBasketIcon } from "icons";
import { CreateAccountForm, LoginForm } from "src/components/Forms";
import { buySubscribe } from "src/services/requests";
import { ProductType } from "src/types";
import { ToastContainer, toast } from "react-toastify";

interface TabCreateAccountProps {
  product: ProductType;
  index?: number;
  isDisabled?: boolean;
}

export const TabCreateAccount: FC<TabCreateAccountProps> = ({
  product,
  index = 0,
  isDisabled,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast("You have purchased a new subscription");
  const [tabIndex, setTabIndex] = useState(index);
  const [isPurchase, setIsParchase] = useState(false);

  const { name, prices, id } = product;

  const handlePurchaseSubscribe = async () => {
    setIsLoading(true);
    await buySubscribe(id);
    notify();
    setIsLoading(false);

    setIsParchase(true);
  };

  return (
    <>
      {isPurchase ? (
        <PurchaseContainer>
          <ToastContainer />
          <Title>Start your subscription</Title>
          <Text>
            We have sent you a payment receipt by e-mail and a link to download
            the plugin with a license key.
          </Text>

          <CardContainer>
            <TitleContainer>
              <div>Package name</div> <div>Price</div>
            </TitleContainer>

            <Line />

            <СardСontent>
              <NumberOfSites>{name} license</NumberOfSites>
              <PricePurchase>${prices[0].price}</PricePurchase>
            </СardСontent>
          </CardContainer>

          <Link href="/subscriptions" passHref>
            <PurchaseButton text="Go to my subscriptions" />
          </Link>
        </PurchaseContainer>
      ) : (
        <StyledTabs
          defaultFocus
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          focusTabOnClick={true}
        >
          <StyledTabList>
            <StyledTab>Create account</StyledTab>
            <StyledTab>Log in</StyledTab>
            <StyledTab disabled={isDisabled}>Checkout</StyledTab>
          </StyledTabList>

          <StyledTabPanel>
            <Title>Create account</Title>
            <Text>
              You need to enter your name and email. We will send you a
              temporary password by email
            </Text>

            <CreateAccountForm
              onUpdateTabIndex={(index) => setTabIndex(index)}
            />

            <Container>
              Have an account?
              <NextStep>Go to the next step</NextStep>
            </Container>
          </StyledTabPanel>

          <StyledTabPanel>
            <Title>Log in</Title>
            <LoginForm onUpdateTabIndex={(index) => setTabIndex(index)} />
          </StyledTabPanel>

          <StyledTabPanel>
            <Title>Checkout</Title>

            <CardContainer>
              <TitleContainer>
                <div>Package name</div> <div>Price</div>
              </TitleContainer>

              <Line />

              <СardСontent>
                <NumberOfSites>{name} license</NumberOfSites>
                <PriceContainer>
                  ${prices[0].price} <StyledShoppingBasketIcon />
                </PriceContainer>
              </СardСontent>
            </CardContainer>

            <TotalPrice>
              Total:<Price>${prices[0].price}</Price>
            </TotalPrice>

            <StyledButton
              isLoading={isLoading}
              onClick={handlePurchaseSubscribe}
              type="submit"
              text="Purchase"
            />
          </StyledTabPanel>
        </StyledTabs>
      )}
    </>
  );
};

const StyledTabs = styled(Tabs)`
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 375px) {
    width: 100%;
    font-size: 14px;
  }
`;

const PurchaseContainer = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const PurchaseButton = styled(Button)`
  max-width: 620px;
  width: 100%;
  margin-top: 24px;
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  max-width: 195px;
  width: 100%;
  margin-right: 20px;
  white-space: nowrap;
  color: ${COLORS.Color_100};
  background-color: ${COLORS.Color_800};
  border-bottom: 8px solid ${COLORS.Color_600};
  padding-bottom: 20px;

  &:focus {
    color: ${COLORS.Primary_1};
    border-color: ${COLORS.Primary_1};
  }
  &:active {
    color: ${COLORS.Primary_1};
    border-color: ${COLORS.Primary_1};
  }
  @media (max-width: 375px) {
    border-bottom: 2px solid ${COLORS.Color_600};
    padding-bottom: 5px;
  }
`;

const StyledTabList = styled(TabList)`
  padding: 4px;
  display: flex;
  margin-bottom: 64px;
`;

const StyledTabPanel = styled(TabPanel)`
  max-width: 620px;
`;

const Title = styled.h2`
  font-size: 44px;
  color: ${COLORS.Color_100};
  margin-bottom: 16px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${COLORS.Color_100};
  margin-bottom: 32px;
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  margin-bottom: 48px;
`;

const Container = styled.div`
  text-align: start;
  color: ${COLORS.Color_100};
  font-size: 16px;
`;

const NextStep = styled.a`
  cursor: pointer;
  color: ${COLORS.Primary_1};
  font-size: 16px;
  margin-left: 6px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.Color_700};
  border-radius: 12px;
  padding: 48px 0;
  margin-bottom: 24px;
`;

const Line = styled.div`
  width: 100%;
  min-height: 2px;
  background-color: ${COLORS.Color_500};
  margin-bottom: 32px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${COLORS.Color_100};
  font-size: 24px;
  padding: 0 72px 0 32px;
  margin-bottom: 32px;
`;

const СardСontent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${COLORS.Color_100};
  padding: 0 50px 12px 32px;
`;

const NumberOfSites = styled.div`
  font-size: 24px;
`;

const StyledShoppingBasketIcon = styled(ShoppingBasketIcon)`
  margin-left: 11px;
`;

const PriceContainer = styled.div`
  display: flex;
  font-size: 24px;
`;

const TotalPrice = styled.div`
  width: 100%;
  font-size: 28px;
  margin-bottom: 48px;
  color: ${COLORS.Color_100};
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 28px;
`;

const PricePurchase = styled.div`
  font-size: 28px;
  margin-right: 26px;
`;
