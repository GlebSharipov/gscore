import React, { FC } from "react";
import { COLORS } from "assets/constant/colors";
import styled from "styled-components";
import { CheckIcon } from "icons";
import { TYPOGRAPHY } from "assets/styles/typography";

interface LicenseFeaturesProps {
  sitesCount: number;
  secondType?: number;
}

export const LicenseFeatures: FC<LicenseFeaturesProps> = ({
  sitesCount,
  secondType,
}) => {
  return (
    <Root>
      <CheckContainer>
        <Check>
          <StyledCheckIcon
            color={secondType == 2 ? COLORS.Primari_1 : COLORS.Color_700}
          />
        </Check>
        <Description>All features for {sitesCount} sites</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon
            color={secondType == 2 ? COLORS.Primari_1 : COLORS.Color_700}
          />
        </Check>
        <Description>Special introductory pricing</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon
            color={secondType == 2 ? COLORS.Primari_1 : COLORS.Color_700}
          />
        </Check>
        <Description>Unlimited Pages and Keywords</Description>
      </CheckContainer>
      <CheckContainer>
        <Check>
          <StyledCheckIcon
            color={secondType == 2 ? COLORS.Primari_1 : COLORS.Color_700}
          />
        </Check>
        <Description>Billed annually</Description>
      </CheckContainer>
    </Root>
  );
};

const Root = styled.ul`
  width: 100%;
  margin-top: 30px;
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

const StyledCheckIcon = styled(CheckIcon)`
  width: 26px;
  height: 26px;
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 270px;
  margin-left: 10px;
  word-break: break-all;
  color: ${COLORS.Color_100};
  ${TYPOGRAPHY.text_single}
`;
