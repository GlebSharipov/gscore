import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button, Status } from "UI";
import { TYPOGRAPHY } from "assets/styles/typography";
import dayjs from "dayjs";
interface CardProps {
  isDisabled?: boolean;
  price: string;
}

export const Card: FC<CardProps> = ({ isDisabled, price }) => {
  const day = dayjs().format("DD.MM.YYYY");

  return (
    <Root $isDisabled={isDisabled}>
      <StatusContainer>
        <Title>Gscore</Title>
        <Status isActive />
      </StatusContainer>

      <LicenseContainer>
        <LeftSide>
          <TitleLicnse>Single site license</TitleLicnse>
          <ValidUntil>valid until {day}</ValidUntil>
          <Button variant="secondary" isDisabled={isDisabled} text="View" />
        </LeftSide>
        <Price>${price}</Price>
      </LicenseContainer>
    </Root>
  );
};

const Root = styled.div<{ $isDisabled?: boolean }>`
  border-radius: 12px;
  max-width: 620px;
  background-color: ${COLORS.Color_600};
  opacity: ${({ $isDisabled }) => $isDisabled && 0.6};
`;

const StatusContainer = styled.div`
  width: 100%;
  padding: 33px 64px 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.Color_500};

  @media (max-width: 375px) {
    font-size: 20px;
    padding-right: 40px;
  }
`;

const Title = styled.h2`
  color: ${COLORS.Color_100};
  font-size: 22px;

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

const LicenseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 80px 48px 32px;

  @media (max-width: 375px) {
    padding-right: 40px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: start;
`;

const TitleLicnse = styled.p`
  margin-right: 20px;
  font-size: 24px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const ValidUntil = styled.p`
  color: ${COLORS.Color_500};
  margin: 2px 0 25px 0;
  font-size: 16px;
  ${TYPOGRAPHY.text_single}
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const Price = styled.p`
  font-size: 24px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
