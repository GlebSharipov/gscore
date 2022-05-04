import type { NextPage } from "next";
import Link from "next/link";

import styled from "styled-components";
import { COLORS } from "assets/constant/colors";
import { Button } from "UI";

const PurchasePage: NextPage = () => {
  return (
    <Root>
      <Title>Start your subscription</Title>
      <Text>
        We have sent you a payment receipt by e-mail and a link to download the
        plugin with a license key.
      </Text>

      <CardContainer>
        <TitleContainer>
          <div>Package name</div> <div>Price</div>
        </TitleContainer>

        <Line />

        <СardСontent>
          <NumberOfSites>Single site license</NumberOfSites>
          <Price>$77</Price>
        </СardСontent>
      </CardContainer>

      <Link href="/subscriptions" passHref>
        <StyledButton type="submit" text="Go to my subscriptions" />
      </Link>
    </Root>
  );
};

const Root = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 44px;
  color: ${COLORS.Color_100};
  margin-bottom: 16px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${COLORS.Color_100};
  margin-bottom: 48px;
`;

const StyledButton = styled(Button)`
  max-width: 620px;
  width: 100%;
  margin-bottom: 48px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.Color_700};
  border-radius: 12px;
  padding: 48px 0;
  margin-bottom: 48px;
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

const Price = styled.div`
  display: flex;
  font-size: 24px;
  margin-right: 30px;
`;

export default PurchasePage;
