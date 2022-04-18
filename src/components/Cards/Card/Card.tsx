import React, { FC } from "react";
import { COLORS } from "../../../assets/constant/colors";
import styled from "styled-components";
import { Button, Status } from "../../UI";

interface CardProps {
  isDisabled?: boolean;
}

export const Card: FC<CardProps> = ({ isDisabled }) => {
  return (
    <Root isDisabled={isDisabled}>
      <StatusContainer>
        <Title>Gscore</Title>
        <Status isHold />
      </StatusContainer>

      <LicenseContainer>
        <LeftSide>
          <TitleLicnse>Single site license</TitleLicnse>
          <ValidUntil>valid until 21.10.2022</ValidUntil>
          <Button isDisabled={isDisabled} secondary text="View" />
        </LeftSide>
        <Price>$77</Price>
      </LicenseContainer>
    </Root>
  );
};

const Root = styled.div<{ isDisabled?: boolean }>`
  border-radius: 12px;
  max-width: 620px;
  background-color: ${COLORS.Color_600};
  opacity: ${({ isDisabled }) => isDisabled && 0.6};
`;

const StatusContainer = styled.div`
  width: 100%;
  padding: 48px 64px 32px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.Color_500};
`;

const Title = styled.h2`
  color: ${COLORS.Color_100};
  font-size: 22px;
`;

const LicenseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 80px 48px 32px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: start;
`;

const TitleLicnse = styled.p`
  font-size: 24px;
  color: ${COLORS.Color_100};
`;

const ValidUntil = styled.p`
  color: ${COLORS.Color_500};
  margin: 12px 0;
  font-size: 16px;
`;

const Price = styled.p`
  font-size: 24px;
  color: ${COLORS.Color_100};
`;
