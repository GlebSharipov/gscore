import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { Button, Status } from "UI";
import { TYPOGRAPHY } from "assets/styles/typography";
import dayjs from "dayjs";
interface CardProps {
  isDisabled?: boolean;
  price: string;
  className?: string;
}

export const Card: FC<CardProps> = ({ isDisabled, price, className }) => {
  const day = dayjs().format("DD.MM.YYYY");

  return (
    <Root className={className} $isDisabled={isDisabled}>
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
  background-color: ${COLORS.Color_700};
  opacity: ${({ $isDisabled }) => $isDisabled && 0.6};
`;

const StatusContainer = styled.div`
  width: 100%;
  padding: 33px 64px 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.Color_500};

  @media (max-width: 420px) {
    font-size: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.h2`
  color: ${COLORS.Color_100};
  font-size: 22px;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const LicenseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 80px 48px 32px;

  @media (max-width: 420px) {
    padding-right: 20px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: start;
`;

const TitleLicnse = styled.div`
  margin-right: 20px;
  margin-bottom: 12px;
  font-size: 24px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

const ValidUntil = styled.div`
  color: ${COLORS.Color_500};
  margin: 2px 0 25px 0;
  font-size: 16px;
  ${TYPOGRAPHY.text_single}
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

const Price = styled.div`
  font-size: 24px;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
