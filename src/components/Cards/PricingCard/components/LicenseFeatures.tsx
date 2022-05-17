import React, { FC } from "react";
import { COLORS } from "src/constant";
import styled from "styled-components";
import { CheckIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";

interface LicenseFeaturesProps {
  sitesCount: number;
  isSecondType?: boolean;
}

export const LicenseFeatures: FC<LicenseFeaturesProps> = ({
  sitesCount,
  isSecondType,
}) => {
  return (
    <Root>
      <CheckContainer>
        <Check>
          <StyledCheckIcon $isSecodType={isSecondType} />
        </Check>
        <Description>All features for {sitesCount} sites</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon $isSecodType={isSecondType} />
        </Check>
        <Description>Special introductory pricing</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon $isSecodType={isSecondType} />
        </Check>
        <Description>Unlimited Pages and Keywords</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon $isSecodType={isSecondType} />
        </Check>
        <Description>Billed annually</Description>
      </CheckContainer>
    </Root>
  );
};

const Root = styled.ul`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Check = styled.div`
  display: flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${COLORS.Color_100};
`;

const StyledCheckIcon = styled(CheckIcon)<{ $isSecodType?: boolean }>`
  width: 26px;
  height: 26px;
  path {
    stroke: ${({ $isSecodType }) =>
      $isSecodType ? COLORS.Primary_1 : COLORS.Color_700};
  }
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 270px;
  margin-left: 10px;
  word-break: break-all;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
