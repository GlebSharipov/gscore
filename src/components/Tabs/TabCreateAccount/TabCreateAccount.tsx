import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button, Input } from "UI";
import { ShoppingBasketIcon } from "icons";

interface TabCreateAccountProps {
  children?: React.ReactNode;
}

export const TabCreateAccount: FC<TabCreateAccountProps> = ({ children }) => {
  return (
    <StyledTabs>
      <StyledTabList>
        <StyledTab>Create account</StyledTab>
        <StyledTab>Log in</StyledTab>
        <StyledTab>Checkout</StyledTab>
      </StyledTabList>

      <StyledTabPanel>
        <Title>Create account</Title>
        <Text>
          You need to enter your name and email. We will send you a temporary
          password by email
        </Text>

        <Form>
          <StyledInput result="initial" placeholder="Username" />
          <StyledInput result="initial" placeholder="Email" />
          <StyledInput result="initial" placeholder="Password" />

          <StyledButton variant="primary" type="submit" text="Send password" />
        </Form>

        <Container>
          Have an account?
          <NextStep>Go to the next step</NextStep>
        </Container>
      </StyledTabPanel>

      <StyledTabPanel>
        <Title>Log in</Title>
        <Form>
          <StyledInput result="initial" placeholder="Email" />
          <StyledInput result="initial" placeholder="Password" />

          <StyledButton variant="primary" type="submit" text="Log in" />
        </Form>
      </StyledTabPanel>

      <StyledTabPanel>
        <Title>Checkout</Title>

        <CardContainer>
          <TitleContainer>
            <div>Package name</div> <div>Price</div>
          </TitleContainer>

          <Line />

          <СardСontent>
            <NumberOfSites>Single site license</NumberOfSites>
            <PriceCantainer>
              $77 <StyledShoppingBasketIcon />
            </PriceCantainer>
          </СardСontent>
        </CardContainer>

        <TotalPrice>
          Total:<Price>$77</Price>
        </TotalPrice>
        <StyledButton variant="primary" type="submit" text="Purchase" />
      </StyledTabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  font-size: 20px;
  width: 100%;
  @media (max-width: 375px) {
    width: 100%;
    font-size: 14px;
  }
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
    color: ${COLORS.Primari_1};
    border-color: ${COLORS.Primari_1};
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

const StyledInput = styled(Input)`
  max-width: 620px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${COLORS.Color_100};
  margin-bottom: 32px;
`;

const Form = styled.form`
  width: 100%;
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
  color: ${COLORS.Primari_1};
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

const PriceCantainer = styled.div`
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
